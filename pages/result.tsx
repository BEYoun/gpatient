import Header from "../components/common/Header";
import { SearchIcon } from '@heroicons/react/solid'
import ListResult from "../components/ListResult";
import { withApollo } from "../utils/withApollo";
import Footer from "../components/common/Footers";
import Head from "next/head";
import CitySelect from "../components/Sections/components/citySelect";
import ExpertiseSelect from "../components/Sections/components/selectSpecialite/expertiseSelect";


const Result: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>Resultat</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="bg-primary">
                {/* Header */}
                <Header theme="black" />
                {/* Header section with select menu */}
                <div className="max-w-2xl mx-auto px-6 py-4 lg:max-w-7xl ">
                    <div className="lg:flex lg:justify-between lg:items-center space-y-2 lg:space-y-0 border-b border-white border-opacity-60 pb-8">
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <div className="w-full px-2 lg:px-6">
                                <ExpertiseSelect
                                    className="block w-full border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full px-2 lg:px-6">
                                <CitySelect
                                    className="block w-full border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                                />
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

            <Footer />
        </div>
    )
}

export default withApollo({ ssr: false })(Result);