import React from 'react'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import Link from 'next/link'
function Home() {
  return (
    <main className={`${styles.main}`}>
    <div className={`${styles.card}`}>
    <Image className={`${styles.qrCode}`} src={"/image-qr-code.png"}  alt='qr-code-image' width={500} height={500}/>
  <h2>
    Improve your front-end skills by building projects
  </h2>
  <p>Scan the QR code to visit Frontend Mentor and take your codding skills to the next level</p>
    </div>
  
    <div className={`${styles.mention}`}>
    Challenge by <Link href="https://www.frontendmentor.io/profile/faisalahmed11" target="_blank">Frontend Mentor</Link>. 
    Coded by <Link href="https://twitter.com/FaisalAhmed_01">Faisal Ahmed</Link>.
  </div>
    </main>
  )
}

export default Home