import { Form, Formik } from 'formik'
import Link from 'next/link'

import { useRegisterMutation } from '../graphql/generated/graphql'
import { withApollo } from '../utils/withApollo'
import Head from 'next/head'
import Image from 'next/image'

import profilePic from '../assets/logoBlack.svg'

const Register: React.FC = ({ }) => {
    const [login] = useRegisterMutation()
    return (
        <div>
            <Head>
                <title>S&apos;enregistrer</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="mx-auto relative h-20 w-40 rounded-sm bg-opacity-10 bg-primary-dark">
                        <Link href="/" passHref>
                            <Image
                                src={profilePic}
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                                className="m-10"
                            />
                        </Link>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        S&apos;enregistrer
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            validate={(values) => {
                                const errors: {
                                    username?: string | undefined
                                    password?: string | undefined
                                } = {}
                                if (!values.username) {
                                    errors.username = 'Required'
                                }
                                return errors
                            }}
                            onSubmit={async (values, { setSubmitting }) => {
                                console.log('ff', values)
                                login({ variables: values }).then(() => {
                                    console.log(`d`)
                                }).catch(() => console.log("dez"))
                                setSubmitting(false)
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <Form
                                    className="space-y-6"
                                    action="#d"
                                    method="POST"
                                    onSubmit={handleSubmit}
                                >
                                    <div>
                                        <label
                                            htmlFor="username"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email address
                    </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="username"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.username}
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                            />
                                            {errors.username && touched.username && errors.username}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Mot de passe
                    </label>
                                        <div className="mt-1">
                                            <input
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                                            />
                                            {errors.password && touched.password && errors.password}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember_me"
                                                name="remember_me"
                                                type="checkbox"
                                                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                                            />
                                            <label
                                                htmlFor="remember_me"
                                                className="ml-2 block text-sm text-gray-900"
                                            >
                                                Remember me
                      </label>
                                        </div>

                                        <div className="text-sm">
                                            <a
                                                href="#d"
                                                className="font-medium text-yellow-600 hover:text-yellow-500"
                                            >
                                                Forgot your password?
                      </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-low hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            S&apos;enregistrer
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">
                                        Ou continuer avec
                  </span>
                                </div>
                            </div>

                            <div className="mt-6 mx-auto">
                                <div>
                                    <a
                                        href="#d"
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 items-center"
                                    >
                                        <span className="sr-only">Sign up with google</span>
                                        <svg
                                            className="w-8 h-8"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 40 40"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div>S&apos;enregistrer avec google</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-10">
                        <Link href="/login"><a>Vous avez déja un compte ? Connextez-vous</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withApollo({ ssr: false })(Register);