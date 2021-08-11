import Image from 'next/image'
import '../styles/Home.module.css'
import {
  InboxIcon,
  RefreshIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import { withApollo } from '../utils/withApollo'

import backgroundHero from '../assets/hero.jpg'
import Footer from '../components/common/Footers'
import Header from '../components/common/Header'
import Link from 'next/link'
import etape1 from '../assets/etape1.svg'
import etape2 from '../assets/etape2.svg'
import etape3 from '../assets/etape3.svg'

const etapes = [
  {
    title: 'Je crée un compte',
    href: '#',
    imageUrl: etape1,
  },
  {
    title: 'Je recherche une spécialité',
    href: '#',
    imageUrl: etape2,
  },
  {
    title: 'Je choisis mon practicien',
    href: '#',
    imageUrl: etape3,
  },
]


const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="min-h-screen flex flex-col">
        <div className="absolute h-screen w-full overflow-hidden">
          <div className="absolute h-screen w-screen">
            <Image
              alt="Mountains"
              src={backgroundHero}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="filter blur-sm backdrop-opacity-80"
            />
          </div>
          <div className="absolute w-screen h-screen bg-opacity-40 bg-black " />
        </div>
        {/* Header */}
        <Header theme='black' />
        {/* Header section with select menu */}
        <div className="flex-1 flex relative max-w-2xl py-16 px-4 sm:py-32 sm:px-6 lg:px-8 lg:max-w-7xl mx-auto w-full">
          <div className=" flex-1 px-0 sm:px-4 flex flex-col h-full">
            <div className="max-w-3xl pb-24">
              <h2 className="text-3xl font-bold text-white sm:tracking-tight sm:text-6xl md:text-7xl leading-8">
                Trouvez un Médecin ou un Professionnel de la Santé à proximité de chez vous !
              </h2>
            </div>
            <div className="w-full lg:mt-0 pt-2">
              <div className="flex flex-col space-y-1 md:space-y-0 md:space-x-2 items-center md:flex-row">
                <div className="relative rounded-md shadow-sm flex-1 w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="expertise"
                    id="expertise"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 md:rounded-l-full h-20"
                    placeholder="Spécialiste, practicien..."
                  />
                </div>
                <div className="relative shadow-sm w-full md:w-72">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <InboxIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="localisation"
                    id="localisation"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 h-20"
                    placeholder="Localisation"
                  />
                </div>
                <Link href="/result">
                  <a
                    href="#"
                    className="md:w-64 w-full justify-center inline-flex items-center px-6 h-20 border border-transparent shadow-sm text-base font-medium md:rounded-r-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Chercher
                    <RefreshIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        {/* DD */}
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Comment ça marche?</h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                GooDoc, c&apos;est un ensemble de services et d&apos;accompagnement quotidien.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {etapes.map((post) => (
                <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden text-center">
                  <div className="flex-shrink-0">
                    <div className="h-48 w-full relative object-cover">
                      <Image
                        src={post.imageUrl}
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <a href={post.href} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />
    </div>
  )
}

export default withApollo({ ssr: false })(Home);