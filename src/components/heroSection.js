import React from 'react'
import Image from 'next/image'
import styles from "../styles/HeroSection.module.css"
function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
<h1>Jane BlogLife</h1>
  <p>Welcome to the blog of <span>Jane&apos;s world</span></p>
   <div>
    <Image src={"/jane.jpg"} alt='' width={1500} height={1000}/>
    <div>
    <p>Jane&apos;s</p>
   <p>Fashion Blog</p>
   <button>
    Subscribe
   </button>
    </div>
   </div>
    </section>
  )
}

export default HeroSection