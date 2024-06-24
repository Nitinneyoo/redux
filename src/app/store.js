import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";

export const Store = configureStore(
    {
        reducer: {
            counter: counterReducer,
        }

    }
);