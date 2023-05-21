import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import {
  ContactSection,
  AboutSection,
  ProjectsSection,
  Footer,
  Header,
} from "@/components";
function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <div className={`${styles.imageContainer}`}>
          <Image
            src={"/architect.jpg"}
            className={`${styles.mainBgImage}`}
            alt=""
            width={1500}
            height={1000}
          />
        </div>
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
