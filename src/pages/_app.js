import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
<Head>
        <title>stats-preview-card-challenge by FrontEnd mentor</title>
        <meta name="description" content="A finial result of stats-preview-card-component-challenge by Frontend Mentor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Component {...pageProps} />
  </>
}
