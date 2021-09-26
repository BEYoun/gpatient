import Image from "next/image";
import securitySVG from '../../assets/security.svg'


const BannerSecurity: React.FC = ({ }) => {
    return (
        <div className="py-8 sm:py-16">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between rounded-2xl px-6 py-10 bg-gradient-to-b from-primary-100 to-primary-200 overflow-hidden shadow-xl sm:px-12 sm:py-6">
                    <div className="">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Votre santé. Vos données.
                        </h2>
                        <p className="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                            La confidentialité de vos informations personnelles est une priorité absolue pour Goodoc et guide notre action au quotidien.
                        </p>
                        <div className="mt-5 sm:mt-6 sm:flex-shrink-0 sm:flex sm:items-center">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-primary hover:bg-primary-deep focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                            >
                                Decouvrir nos engagement
                            </button>
                        </div>
                    </div>
                    <div className="h-72 w-72 relative object-cover">
                        <Image
                            src={securitySVG}
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSecurity;