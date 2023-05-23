import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { Footer, Header, HeroSection, FeedSection, Aside } from "@/components";
function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <HeroSection />
        <div>
          <FeedSection />
          <Aside />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
