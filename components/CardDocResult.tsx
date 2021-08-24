import React, { useState, Fragment } from 'react'
import { MailIcon, PhoneIcon, DotsVerticalIcon } from "@heroicons/react/solid"
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
type Props = {
    person: any
}
const CardDocResult: React.FC<Props> = ({ person }) => {
    // const [open, setOpen] = useState(false)
    return (
        <>
            <li
                key={person?.email}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 z-10"
            // onClick={() => setOpen(true)}
            >
                <div className="flex-1 flex divide-x divide-gray-100">
                    <div className="flex flex-col p-8 md:w-72 w-full">
                        <span className="w-32 h-32 flex-shrink-0 mx-auto rounded-full overflow-hidden bg-gray-100">
                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>
                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{person ? person?.firstName + " " + person?.lastName : ""}</h3>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-gray-500 text-sm capitalize">{person ? person?.speciality : ""}</dd>
                            <dt className="sr-only">Role</dt>
                            {/* <dd className="mt-3 space-x-1">
                                {person?.typeConsulation.map((t: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
                                    <span key={index} className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                        {t}
                                    </span>
                                ))}

                            </dd> */}
                        </dl>
                    </div>
                    <div className="hidden md:block overflow-hidden text-left w-full">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Information</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Details du Dr. <span className="font-bold capitalize">{person?.firstName} {person?.lastName}</span>.</p>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{person?.adresse}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{person?.email || "Non renseigner"}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Numéro de téléphone</dt>
                                    <dd className="mt-1 text-sm text-gray-900">{person?.numberPhone}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">Disponibilité</dt>
                                    <dd className="mt-1 text-sm text-gray-900 space-y-1">
                                        <p>8h30-19h</p>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="w-0 flex-1 flex">
                            <a
                                href={`mailto:${person?.email}`}
                                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                            >
                                <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">Email</span>
                            </a>
                        </div>
                        <div className="-ml-px w-0 flex-1 flex">
                            <a
                                href={`tel:${person?.phonePro}`}
                                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                            >
                                <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">Call</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
            {/* <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" static className="fixed inset-0 overflow-hidden z-50" open={open} onClose={setOpen}>
                    <div className="absolute inset-0 overflow-hidden">

                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="w-screen max-w-7xl">
                                    <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                        <div className="px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">Profile</Dialog.Title>
                                                <div className="ml-3 h-7 flex items-center">
                                                    <button
                                                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divide-y divide-gray-200">
                                            <div className="pb-6">
                                                <div className="bg-indigo-700 h-24 sm:h-20 lg:h-28" />
                                                <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15">
                                                    <div>
                                                        <div className="-m-1 flex">
                                                            <div className="inline-flex rounded-lg overflow-hidden border-4 border-white">
                                                                <img
                                                                    className="flex-shrink-0 h-24 w-24 sm:h-40 sm:w-40 lg:w-48 lg:h-48"
                                                                    src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 sm:ml-6 sm:flex-1">
                                                        <div>
                                                            <div className="flex items-center">
                                                                <h3 className="font-bold text-xl text-gray-900 sm:text-2xl">Ashley Porter</h3>
                                                                <span className="ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full">
                                                                    <span className="sr-only">Online</span>
                                                                </span>
                                                            </div>
                                                            <p className="text-sm text-gray-500">@ashleyporter</p>
                                                        </div>
                                                        <div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
                                                            <button
                                                                type="button"
                                                                className="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-1"
                                                            >
                                                                Message
                            </button>
                                                            <button
                                                                type="button"
                                                                className="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            >
                                                                Call
                            </button>
                                                            <span className="ml-3 inline-flex sm:ml-0">
                                                                <Menu as="div" className="relative inline-block text-left">
                                                                    {({ open }) => (
                                                                        <>
                                                                            <Menu.Button className="inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                                                <span className="sr-only">Open options menu</span>
                                                                                <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                                                            </Menu.Button>
                                                                            <Transition
                                                                                show={open}
                                                                                as={Fragment}
                                                                                enter="transition ease-out duration-100"
                                                                                enterFrom="transform opacity-0 scale-95"
                                                                                enterTo="transform opacity-100 scale-100"
                                                                                leave="transition ease-in duration-75"
                                                                                leaveFrom="transform opacity-100 scale-100"
                                                                                leaveTo="transform opacity-0 scale-95"
                                                                            >
                                                                                <Menu.Items
                                                                                    static
                                                                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                                                >
                                                                                    <div className="py-1">
                                                                                        <Menu.Item>
                                                                                            {({ active }) => (
                                                                                                <a
                                                                                                    href="#"
                                                                                                    className={classNames(
                                                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                                        'block px-4 py-2 text-sm'
                                                                                                    )}
                                                                                                >
                                                                                                    View profile
                                                                                                </a>
                                                                                            )}
                                                                                        </Menu.Item>
                                                                                        <Menu.Item>
                                                                                            {({ active }) => (
                                                                                                <a
                                                                                                    href="#"
                                                                                                    className={classNames(
                                                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                                        'block px-4 py-2 text-sm'
                                                                                                    )}
                                                                                                >
                                                                                                    Copy profile link
                                                                                                </a>
                                                                                            )}
                                                                                        </Menu.Item>
                                                                                    </div>
                                                                                </Menu.Items>
                                                                            </Transition>
                                                                        </>
                                                                    )}
                                                                </Menu>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-5 sm:px-0 sm:py-0">
                                                <dl className="space-y-8 sm:divide-y sm:divide-gray-200 sm:space-y-0">
                                                    <div className="sm:flex sm:px-6 sm:py-5">
                                                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">Bio</dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                                            <p>
                                                                Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
                                                                feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum
                                                                aenean arcu.
                            </p>
                                                        </dd>
                                                    </div>
                                                    <div className="sm:flex sm:px-6 sm:py-5">
                                                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                                            Location
                          </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                                            New York, NY, USA
                          </dd>
                                                    </div>
                                                    <div className="sm:flex sm:px-6 sm:py-5">
                                                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                                            Website
                          </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">ashleyporter.com</dd>
                                                    </div>
                                                    <div className="sm:flex sm:px-6 sm:py-5">
                                                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                                                            Birthday
                          </dt>
                                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
                                                            <time dateTime="1982-06-23">June 23, 1982</time>
                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root> */}
        </>
    )
}

export default CardDocResult;