import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Logo</h1>
        <input id="checkbox" type="checkbox" className={styles.toggleNav} />
        <label className={styles.toggleLabel} for="checkbox">
          <span />
        </label>
        <nav>
          <ul>
            <li>
              <Link className={styles.link} href="">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                About
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Blog
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Home;
