import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    movies:[],
    recommend: [],
    newIn: [],
    original: [],
    trending: [],

    // recommend: null,
    // newDisney: null,
    // original: null,
    // trending: null,
}
// Redux consists of:  Actions (calls the reducer ->) , Reducers (changes the state in UI ->) and State (acts virtual db for your app in chrome)
// An event handler dispatches an action which is sent to the store and triggers the reducer inside the store to update the state in the UI


const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies:(state, action)=>{
            state.movies = action.payload;
            state.recommend = action.payload.recommend;
            state.newIn = action.payload.newIn;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        }
    }
})

// Create and export an action
export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;
export const selectRecommend = (state) => state.movie.recommend;
export const selectNewIn = (state) => state.movie.newIn;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;