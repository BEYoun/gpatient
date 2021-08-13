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
                                <p className='font-thin text-gray-400'>Les Données Personnelles susceptibles d'être collectées par Goodoc sont notamment les suivantes :
• Vos nom et prénom
• Votre adresse e-mail
• Votre numéro de téléphone fixe, mobile,
• Votre date de naissance,
• Votre sexe
• Votre mot de passe
• Vos données de connexion et d'utilisation du Site/Application
• Votre adresse IP, matériel informatique utilisé par l'Utilisateur
Cette liste non-exhaustives est susceptible d’évoluer et d’inclure de nouveaux élément en vue des prochaines mse à jours prévues
Goodoc peut egalement inclure des enquêtes facultatives, Afin de recueillir votre opinion sur votre expérience sur notre Site/Application, l'utilisation de notre Service, ou votre opinion sur les Professionnels de Sante que vous avez consultés.
</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">POURQUOI CES DONNEES SONT-ELLES COLLECTEES?
</h2>
                                <p className='font-thin text-gray-400'>Dans le cadre de l'utilisation du Site et de l'Application et des Services qui y sont proposés, vos Données Personnelles pourront être collectées et traitées par Goodoc pour vous assister durant votre visite dans notre site/Applications et vous mettre en avant les fonctionnalités dont vous avez besoin notamment :<br />
• Vous mettre en avant les professionnelles de la santé à proximité de chez vous.<br />
• Vous proposer les praticiens qui correspondent à vos éxigences.<br />
• Vous assister dans votre propre suivi médical ;<br />
• En prévoyance des nouvelles fonctionnalités ajoutées au fil des mises à jours.
Vos Données Personnelles peuvent également être utilisées dans le cadre de l'utilisation du Site et/ou de l'Application, en tant que responsable de traitement, dans notre intérêt légitime :<br />
• pour traiter votre demande lorsque vous nous contactez via notre formulaire de contact ;<br />
• dans le cadre de la gestion de nos cookies ;<br />
• pour améliorer la navigation sur le Site ou l'utilisation de l'Application, la qualité des services proposés et le suivi des rendez-vous ;<br />
• pour gérer les demandes relatives à vos droits ;<br />
• Pour réaliser des statistiques notamment sur les activités réalisées sur le Site/Application ;<br />
• Pour prévenir et lutter contre la fraude informatique.</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">POURQUOI CES DONNEES SONT-ELLES COLLECTEES?</h2>
                                <p className='font-thin text-gray-400'>Les destinataires de vos Données Personnelles sont :<br />
• Les Professionnels de Santé lors de la prise de rendez-vous ;<br />
• Les personnes habilitées au sein de la société Goodoc en charge de l'exécution des services concernés. Celles-ci n'ont accès qu'aux seules données qui leur sont nécessaires dans le cadre de leurs fonctions ;<br />
• Notre hébergeur de données de santé certifiée ;<br />
• Le prestataire de services de paiement qui intervient pour le règlement de la consultation.<br />
• Le cas échéant, les personnes autorisées chez nos sous-traitants ou partenaires, dans des conditions de stricte confidentialité et exclusivement afin de réaliser les finalités de traitement exposées par la présente Politique.</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">COMBIEN DE TEMPS SONT CONSERVEES VOS DONNEES PERSONNELLES ?</h2>
                                <p className='font-thin text-gray-400'>Vos Données Personnelles sont conservées par Goodoc pendant un temps limité, soit le temps où vous utilisez votre compte et jusqu'à ce que vous le supprimiez.
Si vous n'utilisez plus votre compte pendant un certain temps, nous le supprimerons ainsi que les Données Personnelles associées après vous avoir demandé si vous souhaitez ou non le conserver.
Lorsqu'est utilisé notre formulaire de contact, les Données Personnelles collectées sont conservées le temps strictement nécessaire pour traiter votre demande et vous apporter une réponse.
Au-delà de ces délais, nous supprimerons ou archiverons ces Données Personnelles conformément aux dispositions légales ou règlementaires en vigueur.
Vos Données Personnelles sont conservées par les Professionnels de Santé conformément aux prescriptions légales en la matière.</p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900"> CHARTE SUR LES COOKIES</h2>
                                <p className='font-thin text-gray-400'><b>5.1 L’utilisation des Cookies lors de votre visite sur le site</b> <br />
                                Au cours de votre utilisation du Site, des Cookies peuvent être déposés sur votre terminal et notamment votre ordinateur, votre tablette ou encore votre smartphone.
Nous utilisons ces Cookies pour nous aider à reconnaître votre navigateur ou votre appareil, conserver vos préférences, vous fournir certaines fonctionnalités, ou bien collecter des informations sur vos interactions avec nous, telles que la fréquentation de notre site.
En donnant votre consentement, vous acceptez que le site puisse utiliser les Cookies. Vous pouvez à tout moment désactiver ces Cookies à partir de la console de paramétrage des Cookies <br />
<b>5.2 Définition d’un Cookie et de son utilité :</b> <br />
Les Cookies sont de petits fichiers texte déposés sur votre ordinateur lors de la visite d’un site ou de la consultation d’une publicité. Ils ont notamment pour but de collecter des informations relatives à votre navigation sur les sites et de vous adresser des services personnalisés.<br />
<b>5.3 Les Cookies fonctionnels</b> <br />
Ces Cookies sont nécessaires au fonctionnement technique de notre Site et ne peuvent être désactivés, comme par exemple l’authentification des utilisateurs, ou la sauvegarde des choix fonctionnels des utilisateurs.<br />
<b>5.4 Les Cookies optionnels</b> <br />
Notre site est susceptible de contenir des Cookies de mesure d’audience de services tiers, tels que ceux de Google Analytics. Ils permettent, pendant la durée de validité de ces Cookies, de suivre l’origine, le volume et les interactions de tous les visiteurs du site afin d’améliorer votre expérience utilisateur.
L’émission et l’utilisation de ces cookies et autres traceurs par des tiers sont soumises à leur propre politique de protection de la vie privée. Pour plus d’information concernant ces traitements, vous pouvez vous reporter à leur politique de confidentialité.<br />
<b>5.5 Accepter ou refuser les Cookies</b> <br />
Vous pouvez à tout moment choisir de désactiver ces cookies depuis la console de paramétrage des Cookies présente sur le Site. Vous pouvez accepter ou refuser les cookies au cas par cas ou bien les refuser systématiquement une fois pour toutes.
Votre navigateur peut également être paramétré pour vous signaler les cookies qui sont déposés dans votre ordinateur et vous demander de les accepter ou non.




                                </p>
                            </li>
                            <li>
                                <h2 className="text-md text-gray-900">Sécurité</h2>
                                <p className='font-thin text-gray-400'>Goodoc s’engage à prendre les mesures requises pour protéger vos informations personnelles. en minimisant au maximum l'accès non autorisé à vos informations ou leur divulgation et à leur hébergement sur des serveurs sécurisés. Nous ne pouvons cependant pas garantir l'élimination totale du risque d'usage abusif de vos informations personnelles par des intrus. Protégez les mots de passe de vos comptes et ne les communiquez à personne. Vous devez nous contacter immédiatement si vous découvrez une utilisation non autorisée de votre mot de passe ou toute autre violation de sécurité.</p>
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