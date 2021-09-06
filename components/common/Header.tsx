import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { useApolloClient } from "@apollo/client";
import {
    MenuIcon,
    XIcon,
    LoginIcon
} from '@heroicons/react/outline'

import logo from '../../assets/logo.svg'
import logoBlack from '../../assets/logoBlack.svg'
import { useLogoutMutation, useMeQuery } from '../../graphql/generated/graphql'
import { LogoutIcon } from '@heroicons/react/solid';



type Props = {
    theme: string
}

const Header: React.FC<Props> = ({ theme }) => {
    const { data } = useMeQuery()
    const [logout] = useLogoutMutation()
    const apolloClient = useApolloClient();
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center border-b border-indigo-400 border-opacity-25 py-6 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <Link href='/'>
                                    <a>
                                        <span className="sr-only">Workflow</span>
                                        <div className="h-28 w-36 relative sm:h-14">
                                            <Image
                                                src={theme === 'black' ? logo : logoBlack}
                                                alt="logo"
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="bg-indigo-900 rounded-md p-2 inline-flex items-center justify-center text-indigo-300 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open menu</span>
                                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                <Link href='https://doctor.goodoc.co/'>
                                    <a className={`place-self-end text-base font-medium text-opacity-70 ${theme === "black" ? "text-gray-300" : "text-black"} hover:text-white hover:text-opacity-100"`}>
                                        Êtes-vous un professionnel de la santé?
                                    </a>
                                </Link>
                            </Popover.Group>

                            <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                                {!data?.userSession?.user ?
                                    <Link href='/login'>
                                        <a
                                            className={`whitespace-nowrap ${theme === "black" ? "bg-white" : "bg-accent"} border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex items-center justify-center text-base font-medium ${theme === "black" ? "text-blue-600" : "text-black"}  hover:bg-indigo-50`}
                                        >
                                            Se connecter
                                    </a>
                                    </Link>
                                    : <button
                                        className={`whitespace-nowrap ${theme === "black" ? "bg-white" : "bg-accent"} border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex items-center justify-center text-base font-medium ${theme === "black" ? "text-blue-600" : "text-black"}  hover:bg-indigo-50`}
                                        onClick={async () => {
                                            await logout()
                                            await apolloClient.resetStore();
                                        }}
                                    >
                                        Logout
                            </button>}
                            </div>

                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <Link href='/'>
                                                <a>
                                                    <span className="sr-only">Workflow</span>
                                                    <div className="h-8 w-auto relative sm:h-14">
                                                        <Image
                                                            src={logoBlack}
                                                            alt="logo"
                                                            layout="fill"
                                                            objectFit="contain"
                                                        />
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {!data?.userSession?.user ?
                                                <Link href='/login' >
                                                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" >
                                                        <LoginIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                        <span className="ml-3 text-base font-medium text-gray-900">Se connecter</span>
                                                    </a>
                                                </Link> :
                                                <button
                                                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                                    onClick={async () => {
                                                        await logout()
                                                        await apolloClient.resetStore();
                                                    }}
                                                >
                                                    <LogoutIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                    <span className="ml-3 text-base font-medium text-gray-900">Se deconnecter</span>
                                                </button>
                                            }
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div>
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            Besoin d&apos;aide?
                        </a>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>

    )
}
export default Header;