import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
<Head>
        <title>3-column-preview-card-challenge by FrontEnd mentor</title>
        <meta name="description" content="A finial result of 3-column-card-challenge by Frontend Mentor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Component {...pageProps} />
  </>
}
