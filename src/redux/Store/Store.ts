import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../Reducer/LoginReducer";

export const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
