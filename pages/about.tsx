import Footer from "../Components/common/Footers";
import Header from "../Components/common/Header";
import Process from "../Components/Process";
import { withApollo } from "../utils/withApollo";

const About: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="">
                {/* Header */}
                <Header theme='white' />
                {/* Header section with select menu */}
                <div className="flex relative max-w-2xl py-16 px-4 sm:py-32 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto w-full">
                    <div className=" px-0 sm:px-4 flex flex-col h-full">
                        <div className="max-w-2xl mb-5">
                            <h2 className="text-3xl font-extrabold sm:tracking-tight sm:text-5xl">
                                A propos de <span className="text-primary">Goodoc P</span>
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