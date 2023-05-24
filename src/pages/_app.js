import '@/styles/globals.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
<Head>
        <title>Animated Accordion</title>
        <meta name="description" content="This practice project is about a responsive animating accordion " />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Component {...pageProps} />
  </>
}
