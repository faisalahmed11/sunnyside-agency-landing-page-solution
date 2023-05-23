import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Nav from "./socialLinks";
function Header() {
  return (
    <header className={`${styles.header}`}>
  <Nav/>
  <i className="fa-solid fa-magnifying-glass"></i>
    </header>
  );
}

export default Header;
