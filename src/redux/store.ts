import { configureStore } from "@reduxjs/toolkit";

import { authSliceReducer } from "./reducers/authSliceReducer";

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
