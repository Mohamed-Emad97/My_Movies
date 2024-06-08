import { configureStore } from "@reduxjs/toolkit";
import dataMovies from "./fetchData"
import detailsSlice from "./details";

export default configureStore({
    reducer: {
        dataMovies,
        detailsSlice,
    }
});