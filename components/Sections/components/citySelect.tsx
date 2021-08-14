import React, { useCallback, useState } from "react";

import { Button, MenuItem } from "@blueprintjs/core";
import { Select, SelectProps } from "@blueprintjs/select";

import {
    areFilmsEqual,
    createFilm,
    filmSelectProps,
    IFilm,
    maybeAddCreatedFilmToArrays,
    maybeDeleteCreatedFilmFromArrays,
    renderCreateFilmOption,
    TOP_100_FILMS,
} from "./cities";

const FilmSelect = Select.ofType<IFilm>();

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
    const maybeCreateNewItemFromQuery = allowCreate ? createFilm : undefined;
    const maybeCreateNewItemRenderer = allowCreate ? renderCreateFilmOption : null;

    const [items, setItems] = useState(filmSelectProps.items);
    const [createdItems, setCreatedItems] = useState<IFilm[]>([]);
    const [film, setFilm] = useState(TOP_100_FILMS[0]);
    const handleItemSelect = useCallback((newFilm: IFilm) => {
        // Delete the old film from the list if it was newly created.
        const step1Result = maybeDeleteCreatedFilmFromArrays(items, createdItems, film);
        // Add the new film to the list if it is newly created.
        const step2Result = maybeAddCreatedFilmToArrays(step1Result.items, step1Result.createdItems, newFilm);
        setCreatedItems(step2Result.createdItems);
        setFilm(newFilm);
        setItems(step2Result.items);
    }, [createdItems, film, items]);

    return (
        <FilmSelect
            {...filmSelectProps}
            createNewItemFromQuery={maybeCreateNewItemFromQuery}
            createNewItemRenderer={maybeCreateNewItemRenderer!!}
            itemsEqual={areFilmsEqual}
            noResults={<MenuItem disabled={true} text="No results." />}
            onItemSelect={handleItemSelect}
            items={items}
            {...restProps}
            className="w-full"
        >
            <Button
                icon="locate"
                rightIcon="caret-down"
                text={film ? `${film.city} (${film.city})` : "(No selection)"}
                disabled={restProps.disabled}
                className="h-20 md:w-72 w-full"
            />
        </FilmSelect>
    );
}