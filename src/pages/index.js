import React from 'react'
import styles from "../styles/Home.module.scss"
import { Header,Footer,Section1,Section2,Section3 } from '@/components'
function Home() {
  return (
    <>
    <Header/>
      <main className={styles.main}>
      <Section1 styles={styles}/>
      <Section2 styles={styles}/>
      <Section3 styles={styles}/>

      </main>
      <Footer/>
    </>
  )
}

export default Home