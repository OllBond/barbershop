import { NavLink } from "react-router-dom";
import LogoIcon from "../../icons/LogoIcon";
import css from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={css.navbar}>
      <NavLink to="/">
        <LogoIcon />
      </NavLink>
    </div>
  );
};
export default NavBar;
