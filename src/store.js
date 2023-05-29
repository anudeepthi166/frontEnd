//import

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/toDoSlice";

//create store
export let store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
