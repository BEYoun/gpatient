import Header from "../components/common/Header";
import { SearchIcon } from '@heroicons/react/solid'
import ListResult from "../components/ListResult";
import { withApollo } from "../utils/withApollo";
import Footer from "../components/common/Footers";
import Link from "next/link";


const Terms: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
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
                        <h1 className="text-2xl font-bold text-gray-900 text-center">CONDITIONS D’UTILISATION DES SERVICES GOODOC</h1>
                        <h1 className="text-2xl font-bold text-red-500 text-center">LES CONSULTATIONS EN PRÉSENTIEL OU EN TÉLÉCONSULTATION NE SONT PAS DES SERVICES D&apos;URGENCE. EN CAS D’URGENCE, L’UTILISATEUR DOIT APPELER LE 15 OU LE 112 OU SE DIRIGER VERS UN SERVICE D’URGENCE.</h1>
                        <ol className="list-decimal font-bold p-4">

                            <li>
                                <h2 className="text-md text-gray-900">Objet des CGU</h2>
                                <p className='font-thin text-gray-400'>
                                    Les présentes Conditions d’Utilisation (ci-après nommées « CU ») ont pour objet de définir (i) les conditions d’utilisation des Services Goodoc P et les droits et obligations de Goodoc P et de l’Utilisateur.<br />
                                    Tout Utilisateur qui accède aux Services proposés par Goodoc P s&apos;engage à respecter, sans réserve, les présentes CGU, complétées, le cas échéant, des CPU. Ces CPU sont notifiées avant l’utilisation des Services aux Utilisateurs pour acceptation expresse et préalable.
                                </p>
                            </li>

                            <li>
                                <h2 className="text-md text-gray-900">Acceptation et durée des Conditions Générales d&apos;Utilisation</h2>
                                <p className='font-thin text-gray-400'>
                                    Les CGU régissent l&apos;ensemble des relations entre Goodoc P et les Utilisateurs du Site.<br />
                                    La lecture et l&apos;acceptation sans réserve des Conditions Générales d&apos;Utilisation sont impératives et conditionnent l&apos;accès et l&apos;utilisation de Goodoc P et des Services qui y sont proposés par l&apos;Utilisateur. L&apos;Utilisateur prend connaissance des Conditions Générales d&apos;Utilisation en cliquant sur l&apos;onglet « CGU ».
                                    Dès la première visite et/ou en accédant et/ou en utilisant le Site/l&apos;Application, l&apos;Utilisateur reconnaît :<br />
                                    -Avoir pris connaissance des conditions dans lesquelles fonctionne le Site et l&apos;Application ;<br />
                                    -Disposer de toutes les compétences techniques nécessaires pour accéder et utiliser normalement le Site/de l&apos;Application  dans le respect des présentes CGU ;<br />
                                    -Avoir pris connaissance des Mentions Légales ;<br />
                                    -Avoir pris connaissance et accepté expressément et de manière inconditionnelle les présentes Conditions Générales d&apos;Utilisation ;<br />
                                    Et consent expressément à l&apos;application des CGU dans le cadre de l&apos;accès et/ou l&apos;utilisation par l&apos;Utilisateur du Site/de l&apos;Application. L&apos;Utilisateur peut consulter ou imprimer les Conditions Générales d&apos;Utilisation du Site/de l&apos;Application en vigueur, disponibles sur le Site/l&apos;Application en cliquant sur le lien « CGU ».

                                </p>
                            </li>

                            <li>
                                <h2 className="text-md text-gray-900">Modification des Conditions Générales d&pos;Utilisation</h2>
                                <p className='font-thin text-gray-400'>
                                    Goodoc se réserve le droit, à tout moment, d&apos;apporter aux présentes CGU toutes les modifications qu&apos;elle jugera nécessaires et utiles. Si l&apos;Utilisateur continue à utiliser le Site/l&apos;Application après l&apos;entrée en vigueur des modifications des CGU il accepte ainsi irrévocablement les Conditions Générales d&apos;Utilisation modifiées. Si l&apos;Utilisateur n&apos;approuve pas les Conditions Générales d&apos;Utilisation modifiées ou complétées, il a pour seule possibilité de ne plus accéder et de ne plus utiliser le Site/l&apos;Application.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Accès au Site et à l&apos;Application</h2>
                                <p className='font-thin text-gray-400'>
                                    Le Site et l&apos;Application sont accessibles à tout Utilisateur majeur et disposant de la capacité juridique permettant de souscrire aux présentes CGU. Il est précisé qu&apos;un Utilisateur majeur peut utiliser le Site et l&apos;Application au bénéfice de mineur(s) pour lesquels il exerce l&apos;autorité parentale ou est tuteur/curateur conformément et dans les limites permises par le droit Marocain.<br />
                                    L&apos;Application est accessible via les magasins d&apos;application, App Store et Google Play.<br />
                                    Il appartient à l&apos;Utilisateur (i) de se doter du support (matériel, y compris des logiciels d&apos;exploitation permettant de lancer le Site (ordinateurs, tablette, PC hybrides, smartphone) et/ou, le cas échéant, l&apos;Application (smartphone) conformément au descriptif ladite Application sur la plateforme de téléchargement,  d&apos;assurer la maintenance de ce support, d&apos;assurer la sécurisation de ce support, d&apos;avoir un accès à internet avec tout fournisseur d&apos;accès à internet de son choix et de ne pas avoir de comportements contraires aux lois et règlements susceptibles d&apos;entrainer la fin ou la suspension de son accès internet, le cas échéant.<br />
                                    Les supports permettant l&apos;accès au Site/à l&apos;Application ainsi que son utilisation sont à la charge exclusive de l&apos;Utilisateur, au même titre que les frais induits par leur utilisation.<br />
                                    Il appartiendra à l&apos;Utilisateur de veiller aux possibilités d&apos;évolution des moyens informatiques et de transmission à sa disposition pour que ces moyens puissent s&apos;adapter aux évolutions du Site et de l&apos;Application.<br />
                                    Docavenue n&apos;est pas responsable si les Utilisateurs ne parviennent pas à se connecter ou si la connexion est aléatoire ou interrompue notamment du fait de tout problème technique ou de tout problème lié à l&apos;encombrement du réseau ou à l&apos;utilisation d&apos;un débit inapproprié.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Présentation générale du Site/de l&apos;Application et des Services destinées aux Utilisateurs.</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Limites d’utilisation du Site/Application.</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Sécurité de la plateforme</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Description des servises du Site :</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Résponsabilités des parties prenantes :</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Propriété Intellectuelle</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Modifications</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Données personnelles et Cookies.</h2>
                                <p className='font-thin text-gray-400'>cc</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Force majeure</h2>
                                <p className='font-thin text-gray-400'>
                                    Goodoc décline toute responsabilité pour tout manquement à l&apos;une quelconque de ses obligations contractuelles dans l&apos;hypothèse d&apos;un cas de force majeure tel que défini par l&apos;article 1218 du Code civil et la jurisprudence associée.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Convention de Preuve</h2>
                                <p className='font-thin text-gray-400'>
                                    En sus des dispositions légales reconnaissant la valeur probante de l’écrit numérique, l’Utilisateur reconnait la validité et la force probante des courriers électroniques, des SMS, et des notifications effectuées par Goodoc, des documents numérisés échangés entre eux dans le cadre des Services, de l’utilisation des fonctionnalités par l’Utilisateur, ainsi que de tous enregistrements électroniques conservés par Goodoc dans le cadre des Services.
                                    La conservation et l’archivage des informations et des données sont effectués sur un support fiable et durable
                                </p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Indépendance des clauses</h2>
                                <p className='font-thin text-gray-400'>
                                    Si une quelconque des clauses des CGU devait être frappée de nullité ou déclarée inapplicable pour quelque cause que ce soit, les autres clauses resteraient néanmoins en vigueur.
                                </p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Loi applicable et juridictions compétentes</h2>
                                <p className='font-thin text-gray-400'>
                                    Les présentes CGU ainsi que plus généralement les relations entre l’Utilisateur et Goodoc sont soumises au droit marocain. Tout litige qui pourrait naître de l’interprétation des présentes dispositions ou des relations contractuelles liant l’Utilisateur et Goodoc relèvera de la compétence des juridictions marocaines.
                                </p>
                            </li>

                        </ol>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default withApollo({ ssr: false })(Terms);