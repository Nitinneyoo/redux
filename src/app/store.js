import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import postsReducer from "../feature/posts/postsSlice"
import usersReducer from '../feature/users/usersSlice'



export const Store = configureStore(
    {
        reducer: {
            counter: counterReducer,
            posts: postsReducer,
            users: usersReducer
        }

    }
);