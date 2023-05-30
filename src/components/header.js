import { useEffect } from "react";
import Link from "next/link";
function Header({ className }) {
  useEffect(() => {
    const header = document.querySelector(".header");
    const scrollWatcher = document.createElement("div");
    scrollWatcher.setAttribute("data-scroll-watcher", "");
    header.before(scrollWatcher);

    const navObserver = new IntersectionObserver(
      (entries) => {
        header.setAttribute("sticking", !entries[0].isIntersecting);
      },
      { rootMargin: "80px 0px 0px 0px" }
    );
    navObserver.observe(scrollWatcher);
  }, []);
  return (
    <header className={`${className} header`}>
      <nav>
        <input
          type="checkbox"
          name="checkbox"
          defaultChecked={"false"}
          id="checkbox"
        />
        <ul>
          <li>
            <Link href={"/"}> Home</Link>
          </li>
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/"}>Search</Link>
          </li>
        </ul>
      </nav>
      <label htmlFor="checkbox">
        <i className="fa-regular fa-bars"></i>
      </label>
      <i className="fa-solid fa-magnifying-glass"></i>
    </header>
  );
}

export default Header;
