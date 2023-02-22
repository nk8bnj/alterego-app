import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { AppRootState } from "../../redux/store";
import { setNews } from "../../redux/reducers/authSliceReducer";

import styles from "./News.module.scss";

export interface INews {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: AppRootState) => state.auth.news);
  const [selectedPage, setSelectedPage] = useState(1);
  const [t] = useTranslation();

  useEffect(() => {
    async function fetchNews() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(setNews(response.data));
    }
    fetchNews();
  }, []);

  const getNextNews = () => {
    return setSelectedPage(selectedPage + 1);
  };

  const deleteNews = (itemId: number) => {
    dispatch(setNews(news.filter((item: INews) => item.id !== itemId)));
  };

  const allNews = news.map((item: INews) => {
    if (item.userId <= selectedPage) {
      return (
        <div className={styles.news} key={item.id}>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.id + " " + item.title}</h3>
            <p className={styles.info}>{item.body}</p>
          </div>
          <div>
            <button
              className={styles.delete}
              onClick={() => deleteNews(item.id)}
            >
              {t("delete")}
            </button>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      {allNews}
      <div className={styles.load}>
        <button className={styles.load_btn} onClick={getNextNews}>
          {t("loadMore")}
        </button>
      </div>
    </div>
  );
};

export default News;
