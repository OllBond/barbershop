import { NavLink } from "react-router-dom";

import LogoIcon from "../../icons/LogoIcon";
import Navigation from "./Navigation/Navigation";
import Button from "../../shared/components/Button/Button";

import css from "./navbar.module.css";

const NavBar = () => {
  return (
    <>
      <header>
        <div className={css.navbar}>
          <NavLink to="/">
            <LogoIcon />
          </NavLink>
          <Navigation />
          <Button text="ОНЛАЙН-ЗАПИС" />
        </div>
      </header>
    </>
  );
};
export default NavBar;
