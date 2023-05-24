import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
function Home() {
  useEffect(() => {
    const header = document.querySelector(".header");
    const scrollWatcher = document.createElement("div");
    scrollWatcher.setAttribute("data-scroll-watcher", "");
    header.before(scrollWatcher);

    const navObserver = new IntersectionObserver(
      (entries) => {
        // header.classList.toggle("sticking",!entries[0].isIntersecting)
        header.setAttribute("sticking", !entries[0].isIntersecting);
      },
      { rootMargin: "90px 0px 0px 0px" }
    );
    navObserver.observe(scrollWatcher);
  }, []);

  return (
    <>
      <header className={`${styles.header} header`}>
        <h1>I will change my color on scroll</h1>
      </header>
      <main className={styles.main}>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsa
          possimus sint odio ex accusamus doloremque temporibus architecto
          doloribus necessitatibus, vel hic repellat id unde dignissimos
          nesciunt, consectetur et natus. Perspiciatis aspernatur laudantium ea?
          Sed fugit exercitationem numquam reprehenderit velit facere corporis
          ad, ducimus perferendis fugiat, officiis in aut maxime quidem
          voluptatem explicabo reiciendis esse nam, atque ex. Iure dolorem id
          necessitatibus maiores, soluta dolor nulla non, eaque reprehenderit
          quisquam fugit? Nesciunt praesentium iste inventore tempore, error eos
          vitae dicta ex odio, culpa vel delectus maxime quam expedita
          aspernatur consequatur recusandae iure laudantium, harum quae ducimus
          voluptas perferendis! Voluptas tempore quaerat, incidunt, molestiae
          officiis cumque quam error quidem est commodi quia assumenda
          laboriosam sed expedita eum facere, ea eveniet. Quae exercitationem
          odio aliquam ducimus itaque consequatur quod, pariatur dolor nobis
          mollitia necessitatibus, rerum consectetur natus magnam repellat
          deserunt eos esse adipisci ad impedit explicabo blanditiis quidem?
          Nostrum, possimus accusantium delectus illum totam unde amet nesciunt
          placeat impedit vel rem animi. Aperiam numquam magnam consequuntur!
          Enim inventore, itaque nostrum neque dolore placeat, deleniti quidem
          ea quo odit, cum dolores voluptatum ipsa excepturi rerum tenetur
          provident. Reiciendis sapiente officia commodi nulla dicta velit
          excepturi eius sed eos soluta corporis repudiandae iusto consectetur
          similique accusantium cumque, explicabo quis doloribus quam officiis?
          Rerum quibusdam dolores pariatur quae dolorem sint voluptate atque
          ratione delectus enim beatae illum et blanditiis odit, vitae
          voluptates est aperiam eius laboriosam provident veritatis architecto
          doloribus. Omnis qui fuga veritatis vitae excepturi corporis vel,
          facere at odio amet? Illo maxime voluptatibus perspiciatis nostrum
          nulla, dicta provident iusto id similique reprehenderit porro
          cupiditate quibusdam. Vitae, aspernatur nulla est tempora dicta culpa
          commodi error atque veniam qui a! Iusto veniam illum, magnam illo
          quidem ducimus voluptate quam eveniet, odio porro autem, explicabo
          dolor! Sed, deleniti eius numquam facilis dolorum ab dicta temporibus
          aliquam, quo nam dolores itaque illum consequatur corrupti quis ea
          distinctio, quia ipsa voluptas? Ut iusto laborum fugiat doloremque
          debitis, tenetur id earum aspernatur velit ipsa minus error quam alias
          officia fuga corrupti doloribus, quasi voluptas, est maiores hic
          voluptatibus temporibus iste deleniti! Tempore vero rerum velit vitae
          illo tempora reiciendis error voluptatem nemo consectetur in sit,
          veniam deleniti incidunt ab, explicabo alias ut dolorem repudiandae
          pariatur excepturi distinctio ex recusandae? Molestias excepturi ut
          suscipit quam pariatur inventore voluptatum aspernatur odio nisi hic,
          corrupti reprehenderit culpa aliquid tempore laboriosam earum?
          Necessitatibus error dolores dolorum quaerat voluptas non dicta, iure
          maiores similique nemo placeat doloremque, tenetur neque, natus maxime
          ad debitis sed eaque illum in perspiciatis recusandae molestiae.
          Quaerat aperiam cumque, laboriosam provident consequatur nihil facere
          molestias deserunt dolorum quas nobis impedit fugit temporibus quo
          eligendi reiciendis quod! Dignissimos repellat eum veritatis
          blanditiis cupiditate sequi illum corrupti porro nulla, excepturi
          debitis enim dolore aperiam ipsa molestiae officiis delectus quaerat
          accusamus fugiat. Accusantium, magni. Tempora ad laborum commodi
          quibusdam voluptatibus aliquam dolor, adipisci tempore architecto
          velit illo, voluptas quasi nisi, repellendus ullam fugit et illum
          dolorum amet porro soluta. Odio labore nesciunt sed, eius deserunt est
          vel ut eum possimus vero non ducimus!
        </p>
      </main>
    </>
  );
}

export default Home;
