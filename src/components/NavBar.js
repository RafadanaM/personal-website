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
          <Link
            to="/"
            className={classes.navbarLogo}
            onClick={() => {
              window.location.reload();
            }}
          >
            Rafadana
          </Link>
          <div className={classes.menuIcon} onClick={handleClick}>
            {click ? (
              <svg viewBox="0 0 80 80" width="40" height="25">
                <path
                  stroke="white"
                  fill="transparent"
                  strokeWidth="15"
                  d="M 20,15 L 80,65 M 80,15 L 20,65"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 80 80" width="40" height="25" fill="white">
                <rect width="100" height="15"></rect>
                <rect y="30" width="100" height="15"></rect>
                <rect y="60" width="100" height="15"></rect>
              </svg>
            )}
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
              <HashLink
                smooth
                to="/#/contact"
                className={classes.navLinks}
                onClick={closeMobileMenu}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
