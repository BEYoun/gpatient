import { Header } from "./Components/common/Header";
import { SearchIcon } from '@heroicons/react/solid'
import { ListResult } from "./Components/ListResult";


export default function Result() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-primary">
                {/* Header */}
                <Header theme="black" />
                {/* Header section with select menu */}
                <div className="max-w-2xl mx-auto px-6 py-4 lg:max-w-7xl ">
                    <div className="lg:flex lg:justify-between lg:items-center space-y-2 lg:space-y-0 border-b border-white border-opacity-60 pb-8">
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <div className="w-full px-2 lg:px-6">
                                <label htmlFor="search" className="sr-only">
                                    Search projects
                                </label>
                                <div className="relative text-indigo-200 focus-within:text-gray-400">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search"
                                        name="search"
                                        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                                        placeholder="Médecin, Etablissement, Spécialité..."
                                        type="search"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full px-2 lg:px-6">
                                <label htmlFor="search" className="sr-only">
                                    Où ?
                                </label>
                                <div className="relative text-indigo-200 focus-within:text-gray-400">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search"
                                        name="search"
                                        className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                                        placeholder="Où ?"
                                        type="search"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex md:items-center justify-end">
                            <span className="inline-flex rounded-md shadow">
                                <a
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-accent hover:bg-accent-deep"
                                >
                                    Rechercher
                            </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-white" />
                    </div>
                </div>
            </div>

            <ListResult />


        </div>
    )
}
