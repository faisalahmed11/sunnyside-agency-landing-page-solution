import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
function Header({ setCheck, check }) {
  return (
    <header className={`${styles.header}`}>
      <nav>
        <ul>
          <li>
            <Link
              onClick={() => setCheck(false)}
              className={`${styles.navLink}`}
              href={""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setCheck(false)}
              className={`${styles.navLink}`}
              href={"#band"}
            >
              Band
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setCheck(false)}
              className={`${styles.navLink}`}
              href={"#tourDates"}
            >
              Tour
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setCheck(false)}
              className={`${styles.navLink}`}
              href={"#contact"}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setCheck(false)}
              className={`${styles.navLink}`}
              href={""}
            >
              Merch
            </Link>
          </li>
          <li>
            More
            <ul className={`${styles.moreDropdown}`}>
              <li>Merchandise</li>
              <li>Extra</li>
              <li>Media</li>
            </ul>
          </li>
        </ul>
        <div>
          <i
            onClick={() => setCheck(!check)}
            className={`fa-solid fa-bars ${styles.menuIcon}`}
          ></i>
          <i
            className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}
          ></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
