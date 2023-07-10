import { NavLink } from "react-router-dom";
import { useState, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import Button from "../../../shared/components/Button/Button";
import Modal from "../../../shared/components/ModalWindow/ModalWindow";
import OnlineRegisterForm from "../../OnlineRegisterForm/OnlineRegisterForm";

import css from "./navigation.module.css";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const mobileNav = () => {
    setNav(!nav);
  };
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <>
      <div
        className={
          nav ? `${css.navigateWrapper} ${css.active}` : css.navigateWrapper
        }
      >
        <NavLink to="/price" className={css.link}>
          Послуги та ціни
        </NavLink>
        <NavLink to="/masters" className={css.link}>
          Майстри
        </NavLink>
        <NavLink to="/contacts" className={css.link}>
          Контакти
        </NavLink>
        <Button text="ОНЛАЙН-ЗАПИС" openModal={openModal} />
      </div>

      {showModal && (
        <Modal close={closeModal}>
          <OnlineRegisterForm />
        </Modal>
      )}
      <div className={css.mobileBtn} onClick={mobileNav}>
        {nav && <AiOutlineClose size={25} />}
        {!nav && <AiOutlineMenu size={25} />}
      </div>
    </>
  );
};

export default Navigation;
