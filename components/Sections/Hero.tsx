import SearchBar from "./components/SearchBar";


const Hero: React.FC = ({ }) => {
    return (
        <div className="flex-1 flex relative max-w-2xl py-16 px-4 sm:py-32 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto w-full">
            <div className=" flex-1 px-0 sm:px-4 flex flex-col h-full">
                <div className="max-w-3xl pb-24">
                    <h2 className="text-3xl font-bold text-white sm:tracking-tight sm:text-6xl md:text-7xl leading-8">
                        Trouvez un Médecin ou un Professionnel de la Santé à proximité de chez vous !
                    </h2>
                </div>
                <div className="w-full lg:mt-0 pt-2">
                    <div className="flex flex-col  space-y-1 md:space-y-0 md:space-x-2 items-center md:flex-row">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero