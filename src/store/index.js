import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong: (state, action) => {
            state.push(action.payload);
        },
        removeSong: (state, action) => {
            //
        },
    },
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
})

//to look at state (will show us all state inside the store object)
const startingState = store.getState();

console.log(store);
console.log(startingState);