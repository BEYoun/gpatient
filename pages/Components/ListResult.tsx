import React, { useEffect, useState } from 'react'
import doctorsApi, { Data } from '../api/doctorsApi';
import CardDocResult from './CardDocResult';

const ListResult = () => {
    const [doctors, setDoctors] = useState<Data[]>([]);
    useEffect(() => {
        const data = doctorsApi()
        setDoctors(data);
    }, []);
    return (
        <div className="relative">
            <div className="absolute inset-0 h-1/4 bg-primary" />
            <div className="max-w-2xl mx-auto px-6 py-4 lg:max-w-7xl ">
                <ul className="grid grid-cols-1 gap-6">
                    {doctors.map((person) => (
                        <CardDocResult key={person?.email} person={person} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ListResult
