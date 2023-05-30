import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import { Header, About, Portfolio, Contact, Footer } from "@/components";
function Home() {
  return (
    <>
      <Header className={styles.header} />
      <main className={styles.main}>
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
