import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { ReactChild, useCallback, useEffect, useState } from "react";
import LeftArrowPagination from "./components/LeftArrowPagination";
import NumberPage from "./components/NumberPage";
import RightArrowPagination from "./components/RightArrowPagination";

interface props {
    nbrPage: number;
    selectedPage: number;
}

const PagiantionDoctors: React.FC<props> = ({ nbrPage, selectedPage }) => {
    var pages = Array.from(Array(nbrPage).keys())
    return (
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 my-10">
            <LeftArrowPagination />
            <div className="hidden md:-mt-px md:flex">
                {nbrPage < 10 ?
                    <>
                        {pages.map((x, i) => <NumberPage key={x} num={i} selected={selectedPage === i} />)}
                    </> :
                    <>
                        <NumberPage num={1} selected={selectedPage === 1} />
                        <NumberPage num={2} selected={selectedPage === 2} />
                        <NumberPage num={3} selected={selectedPage === 3} />
                        {
                            selectedPage > 3 && selectedPage < 9 ? (
                                <>
                                    <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                        ...
                                    </span>
                                    <NumberPage num={selectedPage - 1} />
                                    <NumberPage num={selectedPage} selected />
                                    <NumberPage num={selectedPage + 1} />
                                    <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                        ...
                                    </span>
                                </>
                            ) : (
                                <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                                    ...
                                </span>
                            )
                        }

                        <NumberPage num={nbrPage - 2} selected={selectedPage === nbrPage - 2} />
                        <NumberPage num={nbrPage - 1} selected={selectedPage === nbrPage - 1} />
                        <NumberPage num={nbrPage} selected={selectedPage === nbrPage} />

                    </>}
            </div>
            <RightArrowPagination />
        </nav>
    )
}

export default PagiantionDoctors;