import { Popover, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { useGetSpecialitiesQuery } from "../../../../../graphql/generated/graphql";


const SearchInput = () => {
    const { data: specialities, loading, error } = useGetSpecialitiesQuery();
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

                    <Popover>
                        {({ open }) => (
                            <>
                                <div className="relative z-50">

                                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                        <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <Popover.Button className="w-full">
                                        <input
                                            id="searchSpeciality"
                                            name="searchSpeciality"
                                            className="block w-full bg-white border border-gray-300 rounded-md py-3 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                                            placeholder="Search Speciality"
                                            type="searchSpeciality"
                                        />
                                    </Popover.Button>
                                </div>

                                {/* Use the Transition component. */}
                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="duration-200 ease-out"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="duration-100 ease-in"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    {/* Mark this component as `static` */}
                                    <Popover.Panel
                                        focus
                                        static
                                        className="absolute z-50 inset-x-0  transition transform origin-top-right"
                                    >
                                        <div className="rounded-lg shadow-lg bg-white p-4 mt-2 max-h-60 overflow-auto focus:outline-none space-y-2 text-base">
                                            {specialities.getSpecialities?.map((s) => (
                                                <div key={s?.id}>
                                                    {s?.name}
                                                </div>
                                            ))}
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;