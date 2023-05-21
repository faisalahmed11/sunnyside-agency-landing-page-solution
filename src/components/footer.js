import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p>
        design by{" "}
        <Link
          target="_blank"
          href={
            "https://www.w3schools.com/w3css/tryw3css_templates_architect.htm"
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
  );
}

export default Footer;
