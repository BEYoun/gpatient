import Footer from "../Components/common/Footers";
import Header from "../Components/common/Header";
import ContactSection from "../Components/ContactSection";
import FAQ from "../Components/FAQ";
import { withApollo } from "../utils/withApollo";

const Contact: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="">
                {/* Header */}
                <Header theme='white' />
                {/* Header section with select menu */}
                <div className="flex relative max-w-2xl py-16 px-4 sm:pt-24 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto w-full">
                    <div className=" px-0 sm:px-4 flex flex-col h-full">
                        <div className="max-w-2xl mb-5">
                            <h2 className="text-3xl font-extrabold sm:tracking-tight sm:text-5xl">
                                Nous contacter !
                            </h2>
                        </div>
                        <p className="text-xl text-gray-500">
                            Besoin d&apos;aide?
                        </p>
                        <p className="text-xl text-gray-500">
                            Souhaitez-vous soumettre une réclamation?
                        </p>
                        <p className="text-xl text-gray-500">
                            Souhaitez-vous faire partie de notre équipe?
                        </p>
                        <p className="text-xl text-gray-500">
                            N&apos;hésitez pas à nous contacter sur les canaux disponnibles !
                        </p>
                    </div>
                </div>
            </div>

            <ContactSection />
            <FAQ />


            {/* Footer */}
            <Footer />
        </div>
    )
}
export default withApollo({ ssr: false })(Contact);