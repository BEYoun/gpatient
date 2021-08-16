import * as React from "react";

import { MenuItem } from "@blueprintjs/core";
import { ItemPredicate, ItemRenderer } from "@blueprintjs/select";

export interface ISpeciality {
    /** Title of film. */
    name: string;
    /** IMDb ranking. */
    rank: number;
}

/** Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top */
export const SPECIALITIES: ISpeciality[] = [
    { name: "specialiste" },
    { name: "generaliste" },
    { name: "ophtalmologue" },
].map((m, index) => ({ ...m, rank: index + 1 }));

export const renderFilm: ItemRenderer<ISpeciality> = (film, { handleClick, modifiers, query }) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    const text = `${film.rank}. ${film.name}`;
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            label={film.name}
            key={film.rank}
            onClick={handleClick}
            text={highlightText(text, query)}
        />
    );
};


export const filterFilm: ItemPredicate<ISpeciality> = (query, film, _index, exactMatch) => {
    const normalizedTitle = film.name.toLowerCase();
    const normalizedQuery = query.toLowerCase();

    if (exactMatch) {
        return normalizedTitle === normalizedQuery;
    } else {
        return `${film.rank}. ${normalizedTitle} ${film.name}`.indexOf(normalizedQuery) >= 0;
    }
};

function highlightText(text: string, query: string) {
    let lastIndex = 0;
    const words = query
        .split(/\s+/)
        .filter(word => word.length > 0)
        .map(escapeRegExpChars);
    if (words.length === 0) {
        return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const tokens: React.ReactNode[] = [];
    while (true) {
        const match = regexp.exec(text);
        if (!match) {
            break;
        }
        const length = match[0].length;
        const before = text.slice(lastIndex, regexp.lastIndex - length);
        if (before.length > 0) {
            tokens.push(before);
        }
        lastIndex = regexp.lastIndex;
        tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
        tokens.push(rest);
    }
    return tokens;
}

function escapeRegExpChars(text: string) {
    return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

export const filmSelectProps = {
    itemPredicate: filterFilm,
    itemRenderer: renderFilm,
    items: SPECIALITIES,
};


export function areSpecialityEqual(filmA: ISpeciality, filmB: ISpeciality) {
    // Compare only the titles (ignoring case) just for simplicity.
    return filmA.name.toLowerCase() === filmB.name.toLowerCase();
}

