import { Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useGetSpecialitiesQuery } from "../../../../../graphql/generated/graphql";


const SearchInput = () => {
    const { data: specialities, loading, error } = useGetSpecialitiesQuery();

    const [specialitiesView, setSpecialitiesView] = useState(specialities?.getSpecialities)

    const [ccNumber, setCcNumber] = useState("");
    const ccNumberRef = useRef(null);
    useEffect(() => {
        setSpecialitiesView(specialities?.getSpecialities)
    }, [specialities]);
    const onChangeCcNumber = (e: any) => {
        setSpecialitiesView(specialities?.getSpecialities?.filter((x) => x?.name?.toLowerCase().includes(e.target.value)))
        setCcNumber(e.target.value);
    };

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    if (loading)
        return <div>loadign</div>
    if (error || specialities == undefined)
        return <div>err</div>
    return (
        <div className="flex-1 px-0 relative w-full">
            <div className="flex items-center lg:max-w-none lg:mx-0 xl:px-0">
                <div className="w-full">
                    <label htmlFor="search" className="sr-only">
                        Search
                    </label>

                    <>
                        <div className="relative z-50">

                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                id="searchSpeciality"
                                name="searchSpeciality"
                                className="block w-full bg-white border border-gray-300 rounded-md py-3 pl-10 pr-3 placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 text-base"
                                placeholder="Search Speciality"
                                type="searchSpeciality"
                                value={ccNumber}
                                onChange={onChangeCcNumber}
                                ref={ccNumberRef}
                                onClick={openModal}
                                onBlur={closeModal}
                            />
                        </div>

                        {/* Use the Transition component. */}
                        <Transition
                            show={isOpen}
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {/* Mark this component as `static` */}
                            <div
                                className="absolute z-50 inset-x-0  transition transform origin-top-right"
                            >
                                <div className="rounded-lg shadow-lg bg-white p-4 mt-2 max-h-60 overflow-auto focus:outline-none space-y-2 text-base">
                                    {specialitiesView?.map((s) => (
                                        <div key={s?.id}>
                                            {s?.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Transition>
                    </>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;