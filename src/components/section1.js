import React from "react";
function Section1({ styles }) {
  return (
    <section className={styles.section1}>
      <img
        className={styles.section1Part1}
        alt=""
        srcSet="/mobile/image-transform.jpg 600w,
      /desktop/image-transform.jpg 1000w"
      />
      <div className={styles.section1Part2}>
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button>Learn More</button>
      </div>

      <img
        className={styles.section1Part3}
        alt=""
        srcSet="/mobile/image-stand-out.jpg 600w,
      /desktop/image-stand-out.jpg 1000w"
      />
      <div className={styles.section1Part4}>
        <h2>Stand out to the right audience </h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we&apos;ll build and
          extend your brand in digital places.
        </p>
        <button>Learn More</button>
      </div>

      <div className={styles.section1Part5}>
        <h3>Graphic Design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients&apos; attention
        </p>
      </div>

      <div className={styles.section1Part6}>
        <h3>Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </section>
  );
}

export default Section1;
