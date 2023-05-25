import '@/styles/globals.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
<Head>
        <title>Responsive Table</title>
        <meta name="description" content="This practice project is about a Table " />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Component {...pageProps} />
  </>
}
