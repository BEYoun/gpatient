interface props {
    num: number;
    selected?: boolean;
}
const NumberPage: React.FC<props> = ({ num, selected = false }) => {
    return (
        <a
            href="#"
            className={selected ? "border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"}
            aria-current={selected ? "page" : undefined}
        >
            {num}
        </a>
    )
}

export default NumberPage