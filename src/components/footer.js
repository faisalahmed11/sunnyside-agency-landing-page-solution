import React from "react";
import styles from "../styles/Footer.module.scss";
import Link from "next/link";
function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <Link href={"/"} className={styles.toTop}>
        To the top
      </Link>
      <nav>
        <ul>
          <li>
            <Link target="_self" href={"#footer"}>
              <i className="fa-brands fa-square-facebook"></i>
            </Link>
          </li>
          <li>
            <Link href={"#footer"}>
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link href={"#footer"}>
              <i className="fa-brands fa-snapchat"></i>
            </Link>
          </li>
          <li>
            <Link href={"#footer"}>
              <i className="fa-brands fa-discord"></i>
            </Link>
          </li>
          <li>
            <Link href={"#footer"}>
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link href={"#footer"}>
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        Design by
        <Link
          target="_blank"
          href={
            "https://www.w3schools.com/w3css/tryw3css_templates_parallax.htm#contact"
          }
        >
          W3.css
        </Link>
        developed by
        <Link target="_blank" href={"https://www.github.com/faisalahmed11"}>
          Faisal Ahmed
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
