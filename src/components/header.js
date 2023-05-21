import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
function Header() {
  return (
    <header className={`${styles.header}`}>
  <nav>
   <Link className={`${styles.navLink}`} href={""}><span>BR</span><span>Architects</span></Link>
 <ul><li>
  <Link href={"#projectSection"} className={`${styles.navLink}`} > Project </Link>
 </li>
 <li>
  <Link href={"#about"} className={`${styles.navLink}`} > About</Link>
 </li>
  <li>
  <Link href={"#contact"} className={`${styles.navLink}`} > Contact </Link>
 </li></ul>
  </nav>
    </header>
  );
}

export default Header;
