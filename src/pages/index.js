import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from "next/link";

function Home() {
  return (
    <main className={`${styles.main}`}>
      <section>
        <div className={`${styles.productImage}`} />

        <div className={`${styles.product}`}>
          <p>PERFUME</p>
          <p>Gabrielle Essence Eau De Parfum</p>
          <p>
            A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House of CHANEL
          </p>

          <p className={`${styles.priceContainer}`}>
            <span>$149.99</span> <del>$169.99</del>
          </p>
          <button>
            <Image
              src="/icon-cart.svg"
              width={20}
              height={20}
              alt="cart icon"
            />{" "}
            Add to Cart
          </button>
        </div>
    <p className={`${styles.referenceLinks}`}>Challenge by <Link href="https://www.frontendmentor.io/profile/faisalahmed11" >Frontend Mentor</Link>  Coded by <Link href="https://twitter.com/FaisalAhmed_01" >Faisal Ahmed</Link></p>
      </section>
    </main>
  );
}

export default Home;
