import React, { useState } from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import Image from "next/image";
function Header() {
  const [check, setCheck] = useState(false);
  return (
    <header className={styles.header}>
      <input type="checkbox" id="checkbox" defaultChecked={check} />
      <nav className={styles.nav}>
        <Link href={""}>
          <Image
            className={styles.logo}
            src={"/logo.svg"}
            alt=""
            width={300}
            height={300}
          />
        </Link>
        <ul>
          <li>
            <Link className={styles.navAbout} href={""}>
              About
            </Link>
          </li>
          <li>
            <Link className={styles.navService} href={""}>
              Services
            </Link>
          </li>
          <li>
            <Link className={styles.navProjects} href={""}>
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.navContact} href={""}>
              Contact
            </Link>
          </li>
        </ul>
        <button onClick={() => setCheck(!check)}>
          <Image
            className={styles.hamburger}
            src={"/icon-hamburger.svg"}
            alt=""
            width={100}
            height={100}
          />
        </button>
      </nav>
      <h1 className={styles.title}>We are creatives</h1>
      <Image
        className={styles.arrowDown}
        alt=""
        width={300}
        height={300}
        src={"/icon-arrow-down.svg"}
      />
    </header>
  );
}

export default Header;
