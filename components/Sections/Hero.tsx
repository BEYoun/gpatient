import { SearchIcon, RefreshIcon, LocationMarkerIcon } from "@heroicons/react/solid"
import Link from "next/link"
import React from "react"
import CitySelect from "./components/citySelect";
import SpecialitySelect from "./components/SpecialitySelect";


const Hero: React.FC = ({ }) => {
    return (
        <div className="flex-1 flex relative max-w-2xl py-16 px-4 sm:py-32 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto w-full">
            <div className=" flex-1 px-0 sm:px-4 flex flex-col h-full">
                <div className="max-w-3xl pb-24">
                    <h2 className="text-3xl font-bold text-white sm:tracking-tight sm:text-6xl md:text-7xl leading-8">
                        Trouvez un Médecin ou un Professionnel de la Santé à proximité de chez vous !
              </h2>
                </div>
                <div className="w-full lg:mt-0 pt-2">
                    <div className="flex flex-col space-y-1 md:space-y-0 md:space-x-2 items-center md:flex-row">
                        <div className="relative rounded-md shadow-sm flex-1 w-full">
                            <SpecialitySelect
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 md:rounded-l-full h-20"
                                tagInputProps={{
                                    className: 'md:rounded-l-full h-20'
                                }}
                            />
                        </div>
                        <div className="relative shadow-sm w-full lg:w-72 h-20">
                            <CitySelect
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 h-20"
                                tagInputProps={{
                                    className: 'h-20'
                                }}
                            />
                        </div>
                        <Link href="/result">
                            <a
                                href="#"
                                className="md:w-64 w-full justify-center inline-flex items-center px-6 h-20 border border-transparent shadow-sm text-base font-medium md:rounded-r-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Chercher
                    <RefreshIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero