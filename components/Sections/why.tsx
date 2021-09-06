import { InboxIcon, SparklesIcon } from "@heroicons/react/solid";
import Image from "next/image";

import whySVG from '../../assets/why.svg'

const WhySection: React.FC = () => {
    return (
        <div className="relative pt-8 pb-16 overflow-hidden">

            <div className="">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-28 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                        <div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                    Pourquoi prendre rendez-vous avec Goodoc ?
                                </h2>
                                <p className="mt-4 text-lg text-gray-500 px-10">

                                    <ul className="list-disc">
                                        <li>Accédez aux disponibilités de dizaines de milliers de professionnels de santé.</li>
                                        <li>Prenez rendez vous en ligne, 24h/24 et 7j/7, pour une consultation physique ou vidéo.</li>
                                        <li>Recevez des rappels automatiques par SMS ou par email.</li>
                                        <li>Retrouvez votre historique de rendez-vous et vos documents médicaux.</li>
                                    </ul>
                                </p>
                                <div className="mt-6">
                                    <button
                                        className="inline-flex bg-primary bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                                    >
                                        Découvrir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                        <div className="pr-4 sm:pr-6 lg:px-0 lg:m-0 lg:relative lg:h-full h-96 items-center">

                            <div className="h-full w-full relative object-cover">
                                <Image
                                    src={whySVG}
                                    alt="logo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhySection;