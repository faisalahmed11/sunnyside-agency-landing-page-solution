import React from 'react'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
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
  
    </main>
  )
}

export default Home