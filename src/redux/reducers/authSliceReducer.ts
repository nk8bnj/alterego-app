import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INews } from "../../pages/News/News";

interface authType {
  news: INews[];
  username: string;
  password: string;
}

const initialState: authType = {
  news: [],
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
    setUsernameRedux(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setPasswordRedux(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
  },
});

export const authSliceReducer = authSlice.reducer;

export const { setNews, setUsernameRedux, setPasswordRedux } =
  authSlice.actions;