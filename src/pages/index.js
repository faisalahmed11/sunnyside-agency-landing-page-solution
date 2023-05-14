import React from "react";
import styles from "../styles/Home.module.css";
import { BiSearch } from "react-icons/bi";
function Home() {
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks for checking out   :)");
        }}
      >
        <input
          placeholder="Search"
          className={styles.formInput}
          type="search"
        />
        <button className={styles.formButton}>
          <BiSearch />
        </button>
      </form>
    </div>
  );
}

export default Home;
