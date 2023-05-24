import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
const Accordion = ({ title, body }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.accordion} active={active.toString()}>
      <h1 tabIndex={0}  onKeyUp={()=>setActive(!active)} onClick={() => setActive(!active)}>{title}</h1>
      <div>
        <p>{body}</p>
      </div>
    </div>
  );
};
function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <h1>Animating Accordion</h1>
          <Accordion
            title={"ipsam reiciendis beatae dignissimos sunt"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum"
            }
          />
          <Accordion
            title={"ipsam reiciendis beatae dignissimos sunt"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum"
            }
          />
          <Accordion
            title={"ipsam reiciendis beatae dignissimos sunt"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum"
            }
          />
          <Accordion
            title={"ipsam reiciendis beatae dignissimos sunt"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum"
            }
          />
          <Accordion
            title={"ipsam reiciendis beatae dignissimos sunt"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum"
            }
          />
          <Accordion
            title={"ipsam reiciendis beatae dignissimos sunt"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum"
            }
          />
         

        </div>
      </main>
    </>
  );
}

export default Home;
