import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  setUsernameRedux,
  setPasswordRedux,
} from "../../redux/reducers/authSliceReducer";

import styles from "./Login.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState(false);
  const [t] = useTranslation();
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [password, setPassword] = useState<string>(
    localStorage.getItem("password") || ""
  );

  const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setUsername(event.target.value);
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setPassword(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }, [username, password]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === "admin" && password === "password") {
      setError(false);
      setAuth(true);
      dispatch(setUsernameRedux(username));
      dispatch(setPasswordRedux(password));
    } else {
      setError(true);
      dispatch(setUsernameRedux(username));
      dispatch(setPasswordRedux(password));
    }
  };

  if (auth) {
    return <Navigate to="/profile" />;
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.error}>
        {error ? t("incorrectCredentials") : ""}
      </div>
      <div className={styles.form}>
        <div>
          <label className={styles.lable} htmlFor="username">
            {t("username")}
          </label>
          <label className={styles.lable} htmlFor="password">
            {t("password")}
          </label>
        </div>
        <div>
          <input
            className={styles.input}
            type="text"
            name="username"
            value={username}
            onChange={usernameHandler}
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
      </div>
      <button className={styles.btn} type="submit">
        {t("submit")}
      </button>
    </form>
  );
};

export default Login;
