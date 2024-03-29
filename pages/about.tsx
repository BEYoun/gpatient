import Head from "next/head";
import Footer from "../components/common/Footers";
import Header from "../components/common/Header";
import Process from "../components/Process";
import { withApollo } from "../utils/withApollo";

const About: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>&Agrave; propos</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="">
                {/* Header */}
                <Header theme='white' />
                {/* Header section with select menu */}
                <div className="flex relative max-w-2xl py-16 px-4 sm:py-32 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto w-full">
                    <div className=" px-0 sm:px-4 flex flex-col h-full">
                        <div className="max-w-2xl mb-5">
                            <h2 className="text-3xl font-extrabold sm:tracking-tight sm:text-5xl">
                                &Agrave; propos de <span className="text-primary">Goodoc</span>
                            </h2>
                        </div>
                        <p className="text-xl text-gray-500 max-w-3xl">
                            Goodoc est une plate-forme digitale qui a pour mission de faciliter l’accès aux soins pour tous les patients mais aussi, de centraliser les démarches thérapeutiques dans touts ses étapes.
                        </p>
                    </div>
                </div>
            </div>


            <Process />


            {/* Footer */}
            <Footer />
        </div>
    )
}

export default withApollo({ ssr: false })(About);