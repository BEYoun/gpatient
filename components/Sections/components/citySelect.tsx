import React, { useCallback, useState } from "react";

import { MenuItem } from "@blueprintjs/core";
import { SelectProps, Suggest } from "@blueprintjs/select";

import {
    areFilmsEqual,
    filmSelectProps,
    IFilm,
    CITIES,
} from "./cities";

const CitySelectInput = Suggest.ofType<IFilm>();

type Props = Omit<
    SelectProps<IFilm>,
    | "createNewItemFromQuery"
    | "createNewItemRenderer"
    | "items"
    | "itemsEqual"
    | "noResults"
    | "onItemSelect"
    | keyof typeof filmSelectProps
> & {
    allowCreate?: boolean;
};

export default function CitySelect({ allowCreate = false, ...restProps }: Props) {
    const renderInputValue = (film: IFilm) => film.city;
    const [items, setItems] = useState(filmSelectProps.items);
    const [film, setFilm] = useState(CITIES[0]);
    const handleItemSelect = useCallback((newFilm: IFilm) => {
        setFilm(newFilm);
    }, []);

    return (
        <CitySelectInput
            {...filmSelectProps}
            itemsEqual={areFilmsEqual}
            noResults={<MenuItem disabled={true} text="No results." />}
            onItemSelect={handleItemSelect}
            items={items}
            {...restProps}
            inputValueRenderer={renderInputValue}
            defaultSelectedItem={film}
        />
    );
}