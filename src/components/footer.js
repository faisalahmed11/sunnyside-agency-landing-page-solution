import React from 'react'
import Link from 'next/link'
import styles from "../styles/Home.module.css"

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
    <div>
    <i class="fa-brands fa-square-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-snapchat"></i>
    <i class="fa-brands fa-pinterest-p"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-linkedin-in"></i>
    </div>
      <p>
        design by{" "}
        <Link
          target="_blank"
          href={
            "https://www.w3schools.com/w3css/tryw3css_templates_band.htm#"
          }
        >
          W3.css
        </Link>{" "}
        developed by{" "}
        <Link href={"https://github.com/faisalahmed11"} target="_blank">
          Faisal Ahmed
        </Link>
      </p>
    </footer>
  )
}

export default Footer