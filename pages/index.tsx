import Image from 'next/image'
import '../styles/Home.module.css'
import {
  InboxIcon,
  RefreshIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import { withApollo } from '../utils/withApollo'

import Footer from '../components/common/Footers'
import Header from '../components/common/Header'
import Link from 'next/link'
import etape1 from '../assets/etape1.svg'
import etape2 from '../assets/etape2.svg'
import etape3 from '../assets/etape3.svg'
import Head from 'next/head'
import Hero from '../components/Sections/Hero'

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
      <Head>
        <title>Goodoc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className="min-h-screen flex flex-col bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/hero.jpg)`,
        }}
      >
        {/* Header */}
        <Header theme='black' />
        {/* Header section with select menu */}
        <Hero />
      </div>

      <div className="bg-gray-50">
        {/* DD */}
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">Comment ça marche?</h2>
              <p className="mt-3 max-w-3xl mx-auto text-2xl text-gray-500 sm:mt-4">
                GooDoc, c&apos;est un ensemble de services et d&apos;accompagnement quotidien.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {etapes.map((post) => (
                <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden text-center bg-white">
                  <div className="flex-shrink-0">
                    <div className="h-64 w-full relative object-cover">
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

export default withApollo({ ssr: true })(Home);