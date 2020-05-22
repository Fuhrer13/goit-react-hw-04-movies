import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../Helpers/router";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <NavLink
            className={classes.navLink}
            exact
            to={routes.HOME}
            activeClassName={classes.activeClassLink}
          >
            Home
          </NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink
            className={classes.navLink}
            exact
            to={routes.MOVIES}
            activeClassName={classes.activeClassLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
