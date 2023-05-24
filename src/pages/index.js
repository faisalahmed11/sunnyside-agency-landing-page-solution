import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
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
            title={"ipsam reiciendis beatae dignissimos"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum nostrum aspernatur consequatur esse sed eos, suscipit rem similique! Doloremque dolorum accusantium exercitationem nulla et ad voluptas eum deleniti consectetur ea, error cumque tenetur id molestiae beatae autem voluptatem nesciunt in rerum eos nemo laborum quae? Fugiat unde, consequatur itaque dolores numquam consequuntur incidunt soluta deserunt illo recusandae laboriosam iusto quod natus pariatur ut! Illum, nihil tempora rem ea sunt, consequuntur non libero voluptates iste quidem itaque culpa necessitatibus? Dignissimos aspernatur perspiciatis animi! Provident laborum quisquam ut dicta maiores voluptas dolorem assumenda illo dolor veritatis facilis sit totam tempora nulla dolores quasi reiciendis mollitia in deleniti, velit, debitis quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehend"
            }
          />
          <Accordion
            title={"ipsam reiciendis beatae dignissimos sunt"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum"
            }
          />

          <Accordion
            title={"ipsam reiciendis beatae dignissimos"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum nostrum aspernatur consequatur esse sed eos, suscipit rem similique! Doloremque dolorum accusantium exercitationem nulla et ad voluptas eum deleniti consectetur ea, error cumque tenetur id molestiae beatae autem voluptatem nesciunt in rerum eos nemo laborum quae? Fugiat unde, consequatur itaque dolores numquam consequuntur incidunt soluta deserunt illo recusandae laboriosam iusto quod natus pariatur ut! Illum, nihil tempora rem ea sunt, consequuntur non libero voluptates iste quidem itaque culpa necessitatibus? Dignissimos aspernatur perspiciatis animi! Provident laborum quisquam ut dicta maiores voluptas dolorem assumenda illo dolor veritatis facilis sit totam tempora nulla dolores quasi reiciendis mollitia in deleniti, velit, debitis quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehend"
            }
          />
          <Accordion
            title={"ipsam reiciendis beatae dignissimos"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum"
            }
          />

          <Accordion
            title={"ipsam reiciendis beatae dignissimos"}
            body={
              "quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehenderit nulla necessitatibus? Eum reprehenderit beatae odio et rerum exercitationem asperiores culpa quasi dolorum nostrum aspernatur consequatur esse sed eos, suscipit rem similique! Doloremque dolorum accusantium exercitationem nulla et ad voluptas eum deleniti consectetur ea, error cumque tenetur id molestiae beatae autem voluptatem nesciunt in rerum eos nemo laborum quae? Fugiat unde, consequatur itaque dolores numquam consequuntur incidunt soluta deserunt illo recusandae laboriosam iusto quod natus pariatur ut! Illum, nihil tempora rem ea sunt, consequuntur non libero voluptates iste quidem itaque culpa necessitatibus? Dignissimos aspernatur perspiciatis animi! Provident laborum quisquam ut dicta maiores voluptas dolorem assumenda illo dolor veritatis facilis sit totam tempora nulla dolores quasi reiciendis mollitia in deleniti, velit, debitis quis illum, voluptatem quas! Culpa repellendus tempore vitae tempora consequatur minima debitis ea dolorem ipsam reiciendis beatae dignissimos sunt itaque quasi maiores, quod eum repellat iusto ex vel, eius doloremque. Est cumque voluptates numquam eligendi quae vero perferendis at reprehend"
            }
          />
        </div>
      </main>
    </>
  );
}

export default Home;
