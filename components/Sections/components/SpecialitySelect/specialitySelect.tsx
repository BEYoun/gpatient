import React, { useCallback, useState } from "react";

import { MenuItem } from "@blueprintjs/core";
import { MultiSelectProps, MultiSelect } from "@blueprintjs/select";

import {
    areSpecialityEqual,
    filmSelectProps,
    ISpeciality,
} from "./specialities";

const SpecialitySelectInput = MultiSelect.ofType<ISpeciality>();

type Props = Omit<
    MultiSelectProps<ISpeciality>,
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
    const renderInputValue = (film: ISpeciality) => film.name;
    const [items, setItems] = useState(filmSelectProps.items);
    const [city, setCity] = useState<ISpeciality[]>([]);
    const getSelectedCityIndex = useCallback(
        (c: ISpeciality) => {
            return city.indexOf(c)
        },
        [city]
    )
    const isCitySelected = useCallback((city: ISpeciality) => {
        return getSelectedCityIndex(city) !== -1;
    }, [getSelectedCityIndex])

    const deselectCity = useCallback((index: number) => {
        setCity(city.filter((_film, i) => i !== index));
    }, [city])
    const handleRemoveCity = useCallback((_tag: React.ReactNode, index: number) => {
        deselectCity(index)
    }, [deselectCity]);
    const handleCitySelect = useCallback((newFilm: ISpeciality) => {
        if (!isCitySelected(newFilm)) {
            setCity([...city, newFilm]);
        } else {
            deselectCity(getSelectedCityIndex(newFilm));
        }
    }, [city, deselectCity, getSelectedCityIndex, isCitySelected]);






    return (
        <SpecialitySelectInput
            {...filmSelectProps}
            itemsEqual={areSpecialityEqual}
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
                placeholder: "Selection de la specialité"
            }}
            resetOnSelect={true}

        />
    );
}