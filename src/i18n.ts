import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      news: "News",
      profile: "Profile",
      login: "Log in",
      logout: "Log out",
      loadMore: "Load more",
      delete: "Delete",
      username: "Username",
      password: "Password",
      submit: "Submit",
      incorrectCredentials: "Incorrect username or password!",
    },
  },
  ua: {
    translation: {
      home: "Головна",
      news: "Новини",
      profile: "Профіль",
      login: "Авторизуватися",
      logout: "Вийти",
      loadMore: "Завантажити ще",
      delete: "Видалити",
      username: "Ім'я користувача",
      password: "Пароль",
      submit: "Увійти",
      incorrectCredentials: "Ім'я користувача або пароль введено неправильно!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
