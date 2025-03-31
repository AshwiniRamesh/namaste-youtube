import { configureStore } from "@reduxjs/toolkit";
import togglesReducer from "./togglesSlice"; // ✅ Renamed for clarity
import videosReducer from "./videosSlice"; // ✅ Use the correct reducer
import searchReducer from './searchSlice';
const store = configureStore({
  reducer: {
    toggles: togglesReducer,
    videos: videosReducer,
    search: searchReducer
  },
});

export default store;
