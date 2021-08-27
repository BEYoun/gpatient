import MultiSelectInputOption from "../../../common/MultiSelectInputOption";
import SearchInput from './components/SearchInput'

const SearchBar = () => {
    return (
        <div className="w-full">
            <div className="bg-white flex flex-col sm:flex-row space-y-2 items-center rounded-md sm:rounded-full shadow-xl px-2 sm:px-8 sm:space-x-4 sm:space-y-0 py-4">
                <SearchInput />
                <MultiSelectInputOption />
                <button className="bg-accent font-bold rounded-full p-3 hover:bg-accent-deep focus:outline-none flex items-center justify-center w-full sm:w-auto">
                    Rechercher
                </button>
            </div>
        </div>
    )
}

export default SearchBar;