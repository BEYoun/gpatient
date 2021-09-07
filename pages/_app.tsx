import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <div className='absolute inset-0'>
        <Component {...pageProps} />
      </div>
    </>
  )
}
export default MyApp
