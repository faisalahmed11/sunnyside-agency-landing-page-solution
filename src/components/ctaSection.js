import React from "react";
import Image from "next/image";
import styles from "../styles/CtaSection.module.css";
function CtaSection() {
  return (
    <section id="tourDates" className={`${styles.ctaSection}`}>
      <h1>Tour Dates</h1>
      <i>Remember to book your tickets!</i>
      <div className={`${styles.datesContainer}`}>
        <p>September</p>
        <p>October</p>
        <p>November</p>
      </div>

      <div className={`${styles.ctaContainer}`}>
        <div>
          <Image
            className={`${styles.ctaImage}`}
            src={"/newyork.jpg"}
            alt=""
            width={300}
            height={300}
          />
          <h2>New York</h2>
          <p>Fri 27 Nov 2016</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <button>Buy Tickets</button>
        </div>
        <div>
          <Image
            className={`${styles.ctaImage}`}
            src={"/paris.jpg"}
            alt=""
            width={300}
            height={300}
          />
          <h2>New York</h2>
          <p>Fri 27 Nov 2016</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <button>Buy Tickets</button>
        </div>
        <div>
          <Image
            className={`${styles.ctaImage}`}
            src={"/sanfran.jpg"}
            alt=""
            width={300}
            height={300}
          />
          <h2>New York</h2>
          <p>Fri 27 Nov 2016</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <button>Buy Tickets</button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
