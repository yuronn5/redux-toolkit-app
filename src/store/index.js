import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong: (state, action) => {
            state.push(action.payload);
        },
        removeSong: (state, action) => {
            // action.payload = string , the song we want to remove

            const index = state.indexOf(action.payload);

            state.splice(index, 1);
        },
    },
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
})

export { store };
export const { addSong, removeSong } = songsSlice.actions;

//list of all reducers
// console.log(songsSlice.actions)

//to call one of reducer
// console.log(songsSlice.actions.addSong())

//with payload as arg
// console.log(songsSlice.actions.addSong('Some song'))

// store.dispatch(
    //to prevent typo errors
    // songsSlice.actions.addSong('Some son1g')
// )

//to look at state (will show us all state inside the store object)
// const startingState = store.getState();

// console.log(store);
// console.log(startingState);