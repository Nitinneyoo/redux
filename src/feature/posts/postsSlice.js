import { createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"

import { sub } from "date-fns"

const initialState = [
    {
        id: '1',
        title: 'learn Readux',
        content: "This is my First Work on redux tootlkit.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        userID: '1',
        reactions: {
            heart: 0,
            thumbsup: 0,
            wow: 0,
            rocket: 0,
            trophy: 0
        }
    },
    {
        id: '2',
        title: 'Slice',
        content: "This is method where we get state and get information from it.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        userID: '2',
        reactions: {
            heart: 0,
            thumbsup: 0,
            wow: 0,
            rocket: 0,
            trophy: 0
        }

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
                        userId,
                        reactions: {
                            heart: 0,
                            thumbsup: 0,
                            wow: 0,
                            rocket: 0,
                            trophy: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state) => (state.posts);

export const { postsAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer