import { NavLink } from "react-router-dom";
import { useState, useCallback } from "react";

import LogoIcon from "../../icons/LogoIcon";
import Navigation from "./Navigation/Navigation";
import Button from "../../shared/components/Button/Button";
import Modal from "../../shared/components/ModalWindow/ModalWindow";
import OnlineRegisterForm from "../OnlineRegisterForm/OnlineRegisterForm";

import css from "./navbar.module.css";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <>
      <header>
        <div className={css.navbar}>
          <NavLink to="/">
            <LogoIcon />
          </NavLink>
          <Navigation />
          <Button text="ОНЛАЙН-ЗАПИС" openModal={openModal} />
          {showModal && (
            <Modal close={closeModal}>
              <OnlineRegisterForm />
            </Modal>
          )}
        </div>
      </header>
    </>
  );
};
export default NavBar;
