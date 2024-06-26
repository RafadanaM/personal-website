import Link from "next/link";
import { useState } from "react";
import { pageSections } from "../../../data/data";
import Menu from "../../menu/Menu";
import NavLink from "../navlink/NavLink";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleOpen = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className={`bg-neutral-900 ${styles.navContainer}`}>
      <div className={`${styles.navContent} container`}>
        <Link href="/" className="fw-bold fs-2xl text-neutral-100">
          Rafadana
        </Link>

        <Menu onClick={toggleOpen} open={menuOpen} />
        <nav
          className={`${styles.linkContainer} ${menuOpen ? styles.linkContainer__open : ""
            } `}
        >
          <ul>
            {pageSections.map(({ id }) => (
              <NavLink
                key={id}
                href={`#${id}`}
                text={id.toUpperCase()}
                animate={menuOpen}
                onLinkClick={closeMenu}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
