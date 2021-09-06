import React from 'react'
import { useGetDoctorsQuery } from '../graphql/generated/graphql';
import CardDocResult from './CardDocResult';
import PagiantionDoctors from './Sections/components/Pagination';

const ListResult = () => {
    const { data, loading, error } = useGetDoctorsQuery();
    return (
        <div className="relative">
            <div className="absolute inset-0 h-20 bg-primary" />
            <div className="max-w-2xl mx-auto px-6 py-4 lg:max-w-7xl ">
                <ul className="grid grid-cols-1 gap-6">
                    {
                        loading ? (
                            <div className="border border-gray-300 shadow rounded-md p-4 w-full mx-auto bg-white h-80 z-30">
                                <div className="animate-pulse flex space-x-4">
                                    <div className="rounded-full bg-gray-400 h-24 w-24"></div>
                                    <div className="flex-1 space-y-4 py-1">
                                        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gray-400 rounded"></div>
                                            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
                                            <div className="h-4 bg-gray-400 rounded w-2/6"></div>
                                            <div className="h-4 bg-gray-400 rounded"></div>
                                        </div>
                                        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                                    </div>
                                </div>
                            </div>
                        ) : error ? (<div>err</div>) : data?.getDoctors?.doctors?.slice(0, 10).map((person) => (
                            <CardDocResult key={person?.id} person={person} />
                        ))
                    }
                </ul>
                {
                    !loading ? (
                        <PagiantionDoctors nbrPage={data?.getDoctors?.nbrPages!} selectedPage={data?.getDoctors?.page!} />
                    ) : null
                }
            </div>
        </div>
    )
}
export default ListResult
