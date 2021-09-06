import Link from "next/link";
import MultiSelectInputOption from "../../../common/MultiSelectInputOption";
import SearchInput from './components/SearchInput'

const SearchBar = () => {
    return (
        <div className="w-full">
            <div className="bg-white flex flex-col sm:flex-row space-y-2 items-center rounded-md sm:rounded-full shadow-xl px-2 sm:px-8 sm:space-x-4 sm:space-y-0 py-4">
                <SearchInput />
                <MultiSelectInputOption />
                <Link passHref href='/result'>
                    <div className="bg-accent text-xl font-bold rounded-full py-2 px-8 hover:bg-accent-deep focus:outline-none flex items-center justify-center w-full sm:w-auto">
                        Rechercher
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SearchBar;