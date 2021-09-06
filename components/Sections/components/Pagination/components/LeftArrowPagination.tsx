import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

const LeftArrowPagination: React.FC = () => {
    return (
        <div className="-mt-px w-0 flex-1 flex">
            <a
                href="#"
                className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
                <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                </a>
        </div>
    )
}

export default LeftArrowPagination;