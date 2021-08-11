import Image from "next/image";
import doc from '../assets/doc1.jpeg'
export default function Process() {
    return (
        <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                    <div className="h-56 relative w-full object-cover lg:absolute lg:h-full">
                        <Image
                            src={doc}
                            alt="logo"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
            <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div className="lg:col-start-2 lg:pl-8">
                    <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                        <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">GooDoc</h2>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Qu’est ce que Goodoc ?
            </h3>
                        <p className="mt-8 text-lg text-gray-500">
                            Goodoc est l’assistance médicale du futur. il s’agit d’un Ecosystème digitale ayant pour principale objectif: la révolution du système de santé au Maroc et pourquoi pas dans le Monde .
                        </p>
                        <div className="mt-5 prose prose-indigo text-gray-500">
                            <p>
                                A son Apogée, Goodoc comprendra :
                            </p>
                            <ul>
                                <li><span className="font-bold text-black">Un site destiné aux Patients</span> pour la recherche des professionnels de santé et des pharmacies, la prise de rendez-vous, la téléconsultation, un dossier médical digital... , </li>
                                <li><span className="font-bold text-black">Un Site destiné aux Docteurs</span> pour la souscription à nos services, notamment l’agenda électronique, le système de gestion de cabinet,
tablettee Goodoc...</li>
                                <li><span className="font-bold text-black">Une Application Mobile pour patients</span> et Médecins afin de garder l’accès à toutes ces fonctionnalités en tous temps.</li>
                                <li><span className="font-bold text-black">Des produits destinés aux professionnels de la santé</span> (tablettes et logiciels) pour l’optimisation de leurs gestion de cabinet</li>
                            </ul>
                            <p>
                                Et bien d’autres fonctionnalités intéressantes !
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}