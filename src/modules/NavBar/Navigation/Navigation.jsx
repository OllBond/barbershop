import { NavLink } from "react-router-dom";

import css from "./navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.navigateWrapper}>
      <NavLink to="/price" className={css.link}>
        Послуги та ціни
      </NavLink>
      <NavLink to="/masters" className={css.link}>
        Майстри
      </NavLink>
      <NavLink to="/contacts" className={css.link}>
        Контакти
      </NavLink>
    </div>
  );
};

export default Navigation;
