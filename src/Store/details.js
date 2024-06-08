import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    isError: false,
    movie: [],
    tv: [],
};

const API_KEY = import.meta.env.VITE_API_KEY;
let baseUrl = `https://api.themoviedb.org/3/`;


const getDetails = createAsyncThunk("show/details" , async ({category , id}) => {
    const response = await axios.get(`${baseUrl}${category}/${id}${API_KEY}`);
    const result = response.data;
    return result;
});

const detailsSlice = createSlice({
    name: "details",
    initialState,
    extraReducers: (builder) => {
    builder
        .addCase(getDetails.fulfilled, (state, action) => {
            const { category } = action.meta.arg;
            if (category === "movie") {
                state.movie = action.payload;
            } else if (category === "tv") {
                state.tv = action.payload;
            }
            state.isLoading = false;
            state.isError = false;
        })
        .addCase(getDetails.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(getDetails.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export { getDetails };
export default detailsSlice.reducer;