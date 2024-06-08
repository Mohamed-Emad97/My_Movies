import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    trendingMovies: [],
    nowPlayingMovies: [],
    comingSoonMovies: [],
    topRatedMovies:[],
    trendingTvShows: [],
    topRatedTvShows: [],
    trendingAnime: [],
    trendingAnimeShows: [],
    isLoading: false,
    error: false,
};

const API_KEY = import.meta.env.VITE_API_KEY;
let trendingUrl = `https://api.themoviedb.org/3/trending/`; //all is parameter we can switched to tv , movie or person
let baseUrl = `https://api.themoviedb.org/3/`;
let nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing`;
let upComingUrl = `https://api.themoviedb.org/3/movie/upcoming`;
//let searchUrl = `https://api.themoviedb.org/3/search/movie`;
let tvShowsUrl = `https://api.themoviedb.org/3/discover/tv`;
const animeGenreId = 16;

// Function To Get Trending Movies || Tvs Shows
export const getTrending = createAsyncThunk("movies/trending" , async (mediaType) => {
    const response = await axios.get(`${trendingUrl}${mediaType}/day${API_KEY}`);
    const result = response.data.results;
    return result;
});

// Function To Get Top Rated Movies || Tvs Shows
export const getTopRated = createAsyncThunk("movies/topRated", async (mediaType) => {
    const response = await axios.get(`${baseUrl}${mediaType}/top_rated${API_KEY}`);
    const result = response.data.results;
    return result;
});

// Function To Now Playing Movies 
export const getNowPlaying = createAsyncThunk("movies/nowPlaying" , async () => {
    const response = await axios.get(`${nowPlayingUrl}${API_KEY}`);
    const result = response.data.results;
    return result;
});

// Function To Up Coming Movies
export const getUpComing = createAsyncThunk("movies/upComing" , async () => {
    const response = await axios.get(`${upComingUrl}${API_KEY}`);
    const result = response.data.results;
    return result;
});

// Function To Trending Tvs Shows
export const getTredingTvs = createAsyncThunk("movies/trendingTvs" , async () => {
    const response = await axios.get(`${tvShowsUrl}${API_KEY}`);
    const result = response.data.results;
    return result;
});

//Function To Anime Movies
export const getAnimeMovies = createAsyncThunk("movies/animeMoives" , async () => {
    const response = await axios.get(`${baseUrl}discover/movie${API_KEY}&with_genres=${animeGenreId}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`);
    const result = response.data.results;
    return result;
});

//Function To Anime Shows
export const getAnimeShows = createAsyncThunk("movies/animeShows" , async () => {
    const response = await axios.get(`${baseUrl}discover/tv${API_KEY}&with_genres=${animeGenreId}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`);
    const result = response.data.results;
    return result;
});

// create Data Movies Slice To Sending It To Store IT Will Contain All Data We Fetch From API Calling & Response
const dataMovies = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder) => {   
        //Trending Movies 
        builder.addCase(getTrending.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(getTrending.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.trendingMovies = action.payload;
        });
        builder.addCase(getTrending.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });
        //Now Playing Movies 
        builder.addCase(getNowPlaying.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(getNowPlaying.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.error = false;
            state.nowPlayingMovies = action.payload;
        });
        builder.addCase(getNowPlaying.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });
        //Up Coming Movies 
        builder.addCase(getUpComing.pending , (state) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(getUpComing.fulfilled , (state , action) => {
            state.isLoading = false;
            state.error = false;
            state.comingSoonMovies = action.payload;
        });
        builder.addCase(getUpComing.rejected , (state) => {
            state.isLoading = false;
            state.error = true;
        });
        //Top Rated Movies
        builder.addCase(getTopRated.pending , (state) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(getTopRated.fulfilled , (state , action) =>{
            state.isLoading= false;
            state.error = false;
            state.topRatedMovies = action.payload ;
        });
        builder.addCase(getTopRated.rejected , (state) => {
            state.isLoading = false;
            state.error = true;
        });
        //Trending Tv Shows
        builder.addCase(getTredingTvs.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(getTredingTvs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.trendingTvShows = action.payload;
        });
        builder.addCase(getTredingTvs.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });
        //Anime Movies 
        builder.addCase(getAnimeMovies.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(getAnimeMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.trendingAnime = action.payload;
        });
        builder.addCase(getAnimeMovies.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });
        //Anime Shows
        builder.addCase(getAnimeShows.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(getAnimeShows.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.trendingAnimeShows = action.payload;
        });
        builder.addCase(getAnimeShows.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        });
    }
});

export default dataMovies.reducer;