import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classes from "./Navbar.module.css";
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navbarContainer}>
          <Link to="/" className={classes.navbarLogo}>
            Rafadana
          </Link>
          <div className={classes.menuIcon} onClick={handleClick}>
            <i
              className={
                click
                  ? `fas fa-times ${classes.faTimes}`
                  : `fas fa-bars ${classes.faBars}`
              }
            />
          </div>
          <ul
            className={
              click
                ? `${classes.navMenu} ${classes.navMenuActive}`
                : classes.navMenu
            }
          >
            <li className={classes.navItem}>
              <HashLink
                smooth
                to="/#/"
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                Home
              </HashLink>
            </li>
            <li className={classes.navItem}>
              <HashLink
                smooth
                to="/#/about"
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                About
              </HashLink>
            </li>
            <li className={classes.navItem}>
              <Link
                to="/#/contact"
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
