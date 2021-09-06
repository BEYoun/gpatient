import Image from 'next/image'

interface props {
    title: string;
    href: string;
    imageUrl: any;
}


const Etape: React.FC<props> = ({ title, imageUrl, href }) => {
    return (
        <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col rounded-lg overflow-hidden text-center bg-white shadow-2xl hover:p-24">
            <div className="flex-shrink-0 border mx-5 sm:mx-10 mt-5 sm:mt-10 rounded-full p-20 lg:p-10 ">
                <div className="h-64 w-full relative object-cover">
                    <Image
                        src={imageUrl}
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Etape