import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: '1', title: 'learn Readux', content: "This is my First Work on redux tootlkit." },
    { id: '2', title: 'Slice', content: "This is method where we get state and get information from it." }

]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsAdded(state, action) {
            state.push(action.payload)

        }
    }
})

export const selectAllPosts = (state) => (state.posts);

export const { postsAdded } = postsSlice.actions

export default postsSlice.reducer