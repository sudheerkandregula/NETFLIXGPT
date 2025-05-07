import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        trendingMovies:null,
        upcomingMovies:null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addtrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
        addTrendingMovies: (state,acttion) => {
            state.trendingMovies = acttion.payload;
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload;
        }
    }
});


export const {addNowPlayingMovies,addtrailerVideo,addPopularMovies,addTrendingMovies,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
