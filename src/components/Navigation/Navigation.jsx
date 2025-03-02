import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className={style.navigation}>
      <ul className={style.navList}>
        <li>
          <NavLink className={style.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
