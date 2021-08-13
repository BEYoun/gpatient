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
                                <p className='font-thin text-gray-400'>LA PROTECTION DES DONNEES PERSONNELLES EST UNE DES VALEURS CLE DE Goodoc ET A CE TITRE:
 NOUS PRENONS LES MESURES NECESSAIRES A LA PROTECTION DES DONNEES PERSONNELLES QUI LUI SONT CONFIEES DANS LE CADRE DE SES SERVICES.
La présente Politique complète et fait partie intégrante des Conditions Générales d'Utilisation du Site et de l&apos;Application disponibles ici. L&apos;utilisation du Site et/ou de l&apos;Application implique votre acceptation aux dispositions des Conditions Générales d&apos;Utilisation et à la présente Politique.
Cette Politique peut être modifiée, complétée ou mise à jour afin notamment de se conformer à toute évolution légale, réglementaire, jurisprudentielle et technique. Nous vous invitons à consulter régulièrement cette Politique afin de vous tenir informé de la version en vigueur.</p>
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