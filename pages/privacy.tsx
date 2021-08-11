import Header from "../components/common/Header";
import { withApollo } from "../utils/withApollo";
import Footer from "../components/common/Footers";
import Link from "next/link";
import Head from "next/head";


const Privacy: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>privacy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="bg-primary">
                {/* Header */}
                <Header theme="black" />

            </div>

            <div className="max-w-2xl mx-auto px-6 py-4 lg:max-w-7xl ">
                <Link href="/">
                    <a
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-accent hover:bg-accent-deep focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Page d&apos;accueil
                    </a>
                </Link>
                <div className="bg-white overflow-hidden shadow sm:rounded-lg mt-4">
                    <div className="px-4 py-5 sm:p-6">
                        <h1 className="text-2xl font-bold text-gray-900 text-center">Politique de confidentialité - Protection des données personnelles
</h1>
                        <h1 className="text-2xl font-bold text-red-500 text-center">LES CONSULTATIONS EN PRÉSENTIEL OU EN TÉLÉCONSULTATION NE SONT PAS DES SERVICES D&apos;URGENCE. EN CAS D’URGENCE, L’UTILISATEUR DOIT APPELER LE 15 OU LE 112 OU SE DIRIGER VERS UN SERVICE D’URGENCE.</h1>
                        <ol className="list-decimal font-bold p-4">
                            <li>
                                <h2 className="text-md text-gray-900">Objet</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">QUELLES SONT LES DONNEES PERSONNELLES COLLECTEES ?</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">POURQUOI CES DONNEES SONT-ELLES COLLECTEES?
</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">POURQUOI CES DONNEES SONT-ELLES COLLECTEES?</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">COMBIEN DE TEMPS SONT CONSERVEES VOS DONNEES PERSONNELLES ?</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900"> CHARTE SUR LES COOKIES</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Sécurité</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default withApollo({ ssr: false })(Privacy);