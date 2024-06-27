import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"

import { sub } from "date-fns"

const initialState = [
    {
        id: '1',
        title: 'learn Readux',
        content: "This is my First Work on redux tootlkit.",
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },
    {
        id: '2',
        title: 'Slice',
        content: "This is method where we get state and get information from it.",
        date: sub(new Date(), { minutes: 5 }).toISOString()

    }

]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => (state.posts);

export const { postsAdded } = postsSlice.actions

export default postsSlice.reducer