import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
<Head>
        <title>Front-end QR Code Challenge</title>
        <meta name="description" content="A finial result of a frontend qr-code-challenge given by frontendmentor.io and done by Faisal Ahmed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Component {...pageProps} />
  </>
}
