import Header from "../components/common/Header";
import { SearchIcon } from '@heroicons/react/solid'
import ListResult from "../components/ListResult";
import { withApollo } from "../utils/withApollo";
import Footer from "../components/common/Footers";
import Head from "next/head";
import SearchBar from "../components/Sections/components/SearchBar";


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
                    <SearchBar />

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