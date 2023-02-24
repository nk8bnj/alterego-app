import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { INews } from "../../pages/News/News";
import { AppDispatch } from "../store";

interface authType {
  news: INews[];
  error: string;
  username: string;
  password: string;
}

const initialState: authType = {
  news: [],
  error: "",
  username: localStorage.getItem("username") || "",
  password: localStorage.getItem("password") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<INews[]>) {
      state.news = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    setUsernameRedux(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setPasswordRedux(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const authSliceReducer = authSlice.reducer;

export const { setNews, setError, setUsernameRedux, setPasswordRedux } =
  authSlice.actions;

export const fetchNews = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(setNews(response.data));
  } catch (error: any) {
    dispatch(setError(error.message));
  }
};
