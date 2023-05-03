import styles from "../styles/ThankYouComponent.module.css"
import Image from 'next/image'
import React from 'react'

function ThankYouComponent({rating}) {
  return (
    <section className={`${styles.card}`}>
        <Image className={`${styles.image}`} width={150} height={150} src="/illustration-thank-you.svg" alt="star icon" />
        <p>You selected {rating} out of 5</p>
        <p> Thank you!</p>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! 
        </p>
      </section>
  )
}

export default ThankYouComponent