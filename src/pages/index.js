import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import {
  ContactSection,
  CtaSection,
  FirstSection,
  Footer,
  Header,
} from "@/components";
function Home() {
  const [check, setCheck] = useState(false);
  return (
    <>
      <input
        className={`${styles.checkbox}`}
        type="checkbox"
        id="checkbox"
        readOnly
        checked={check}
      />
      <Header setCheck={setCheck} check={check} />
      <main id="home">
        <div className={`${styles.mainBgImg}`}></div>
        <FirstSection />
        <CtaSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default Home;
