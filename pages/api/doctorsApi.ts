import data from './Data/Doctors.json'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
    firstname: string,
    lastname: string,
    specialty : string,
    phonePro:string,
    email: string,
    prices: any[],
    address:string,
    hours:  any[],
    typeConsulation: any[],
    payment: any[]
}

export default function doctorsApi(): Data[] {
  return data
}
