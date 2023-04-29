import { changeLanguage } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { AppRootState } from "../../redux/store";
import {
  setPasswordRedux,
  setUsernameRedux,
} from "../../redux/reducers/authSliceReducer";

import styles from "./Header.module.scss";

const Header = () => {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const username = useSelector((state: AppRootState) => state.auth.username);
  const password = useSelector((state: AppRootState) => state.auth.password);
  const auth = () =>
    username === "admin" && password === "admin" ? true : false;

  const clearLocalStorage = () => {
    localStorage.clear();
    dispatch(setUsernameRedux(""));
    dispatch(setPasswordRedux(""));
  };

  const headerNavItem = ({ isActive }: { isActive: boolean }): string => {
    return isActive
      ? styles.nav__link + " " + styles.nav__link_active
      : styles.nav__link;
  };

  const [activeButton, setActiveButton] = useState<string>("en");
  const headerButton = (lang: string) => {
    changeLanguage(lang);
    if (lang === "en") {
      setActiveButton("en");
    } else if (lang === "ua") {
      setActiveButton("ua");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <NavLink className={headerNavItem} to={"/"}>
          {t("home")}
        </NavLink>
        <NavLink className={headerNavItem} to={"/news"}>
          {t("news")}
        </NavLink>
        <NavLink className={headerNavItem} to={auth() ? "/profile" : "/login"}>
          {auth() ? t("profile") : t("login")}
        </NavLink>
        {auth() && (
          <span
            className={styles.nav__link}
            onClick={() => clearLocalStorage()}
          >
            {t("logout")}
          </span>
        )}
      </div>
      <div>
        <button
          id="en"
          className={
            activeButton === "en"
              ? styles.btn + " " + styles.btn_active
              : styles.btn
          }
          onClick={() => headerButton("en")}
        >
          En
        </button>
        <button
          id="ua"
          className={
            activeButton === "ua"
              ? styles.btn + " " + styles.btn_active
              : styles.btn
          }
          onClick={() => headerButton("ua")}
        >
          Ua
        </button>
      </div>
    </div>
  );
};

export default Header;
