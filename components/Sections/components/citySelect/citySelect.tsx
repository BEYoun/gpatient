import React, { useCallback, useState } from "react";

import { MenuItem } from "@blueprintjs/core";
import { MultiSelectProps, MultiSelect } from "@blueprintjs/select";

import {
    areCitiesEqual,
    filmSelectProps,
    ICity,
    CITIES,
} from "./city";

const CitySelectInput = MultiSelect.ofType<ICity>();

type Props = Omit<
    MultiSelectProps<ICity>,
    | "createNewItemFromQuery"
    | "createNewItemRenderer"
    | "items"
    | "itemsEqual"
    | "noResults"
    | "onItemSelect"
    | "tagRenderer"
    | keyof typeof filmSelectProps
> & {
    allowCreate?: boolean;
};

export default function CitySelect({ allowCreate = false, ...restProps }: Props) {
    const renderInputValue = (film: ICity) => film.city;
    const [items, setItems] = useState(filmSelectProps.items);
    const [city, setCity] = useState([CITIES[0]]);
    const getSelectedCityIndex = useCallback(
        (c: ICity) => {
            return city.indexOf(c)
        },
        [city]
    )
    const isCitySelected = useCallback((city: ICity) => {
        return getSelectedCityIndex(city) !== -1;
    }, [getSelectedCityIndex])

    const deselectCity = useCallback((index: number) => {
        setCity(city.filter((_film, i) => i !== index));
    }, [city])
    const handleRemoveCity = useCallback((_tag: React.ReactNode, index: number) => {
        deselectCity(index)
    }, [deselectCity]);
    const handleCitySelect = useCallback((newFilm: ICity) => {
        if (!isCitySelected(newFilm)) {
            setCity([...city, newFilm]);
        } else {
            deselectCity(getSelectedCityIndex(newFilm));
        }
    }, [city, deselectCity, getSelectedCityIndex, isCitySelected]);






    return (
        <CitySelectInput
            {...filmSelectProps}
            itemsEqual={areCitiesEqual}
            noResults={<MenuItem disabled={true} text="No results." />}
            onItemSelect={handleCitySelect}
            selectedItems={city}
            items={items}
            {...restProps}
            // inputValueRenderer={renderInputValue}
            // defaultSelectedItem={film}
            tagRenderer={renderInputValue}
            popoverProps={{ minimal: true }}
            tagInputProps={{
                ...restProps.tagInputProps,
                onRemove: handleRemoveCity,
                placeholder: "Selection de la ville, province..."
            }}
            resetOnSelect={true}

        />
    );
}