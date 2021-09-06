import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const RightArrowPagination: React.FC = () => {
    return (
        <div className="-mt-px w-0 flex-1 flex justify-end">
            <a
                href="#"
                className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
                Next
          <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>
        </div>
    )
}

export default RightArrowPagination;