import React, { useState } from "react";
import styles from "../styles/Portfolio.module.scss";
import Image from "next/image";

function Portfolio() {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");

  return (
    <section className={styles.portfolio}>
      <p id="portfolio">Portfolio</p>
      <h1>My Work</h1>
      <i>Here are some of my latest lorem work ipsum tipsum.</i>
      <i>Click on the images to make them bigger</i>
      <div className={styles.imagesContainer}>
        {["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"].map((item, index) => (
          <Image
            onClick={() => {
              setShow(true);
              setUrl(item);
            }}
            key={index}
            src={`/${item}.jpg`}
            alt=""
            width={500}
            height={500}
          />
        ))}
      </div>
      <button>Load More</button>
      <div
        className={styles.showImage}
        show={show.toString()}
        onClick={() => setShow(false)}
      >
        <i class="fa-solid fa-xmark"></i>
        <Image
          className={styles.image}
          src={`/${url}.jpg`}
          width={500}
          height={500}
          alt=""
        />
        <p>
          {url == "p1"
            ? "The Mist over the mountains"
            : url == "p2"
            ? "Coffee beans"
            : url == "p3"
            ? "Bear closeup"
            : url == "p4"
            ? "Quite ocean"
            : url == "p5"
            ? "The mist"
            : url == "p6"
            ? "My beloved typewriter"
            : url == "p7"
            ? "Empty ghost train"
            : "Sailing"}
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
