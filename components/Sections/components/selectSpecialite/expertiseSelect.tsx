import React, { useCallback, useState } from "react";

import { MenuItem } from "@blueprintjs/core";
import { SelectProps, Suggest } from "@blueprintjs/select";

import {
    areFilmsEqual,
    filmSelectProps,
    IExperty,
    EXPERTIES,
} from "./experties";

const ExpertiseSelectInput = Suggest.ofType<IExperty>();

type Props = Omit<
    SelectProps<IExperty>,
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

export default function ExpertiseSelect({ allowCreate = false, ...restProps }: Props) {
    const renderInputValue = (film: IExperty) => film.experty;
    const [items, setItems] = useState(filmSelectProps.items);
    const [film, setFilm] = useState(EXPERTIES[0]);
    const handleItemSelect = useCallback((newFilm: IExperty) => {
        setFilm(newFilm);
    }, []);

    return (
        <ExpertiseSelectInput
            {...filmSelectProps}
            itemsEqual={areFilmsEqual}
            noResults={<MenuItem disabled={true} text="No results." />}
            onItemSelect={handleItemSelect}
            items={items}
            {...restProps}
            inputValueRenderer={renderInputValue}
        />
    );
}