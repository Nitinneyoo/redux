import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: '0', name: 'Nitin Singh' },
    { id: '1', name: 'Ashwanee gupta' },
    { id: '2', name: 'Ankit Singh Chauhan' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer