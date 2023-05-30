import React from 'react'
import styles from "../styles/Contact.module.scss"
import Image from 'next/image'
function Contact() {
  return (
    <section className={styles.contact}>
        <p className={styles.parallax}>Contact</p>
        <h1 id='contact'>Where I Work</h1>
        <i className={styles.subHeading}>I&apos;d love your feedback!</i>
        <div className={styles.innerContainer}>
            <Image className={styles.map} src={"/map.jpg"} alt='' width={500}  height={500}/>
            <form onSubmit={(e)=>{e.preventDefault(),alert("Thanks for checking out :)")}}>
                <p className={styles.location}>Chicago, US</p>
                <p className={styles.phone}>Phone: +00 1551515</p>
                <p className={styles.email}>Email: mail@mail.com</p>
                <p>Swing by for a cup of <i class="fa-solid fa-mug-hot"></i>, or leave me a note:</p>
                <input required className={styles.inputName} type="text"  name='name' placeholder='Name'/>
                <input required className={styles.inputEmail} type="email" name='email' placeholder='Email' />
                <input required className={styles.inputMessage} type="text" name='message' placeholder='Message'/>
                <button>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact