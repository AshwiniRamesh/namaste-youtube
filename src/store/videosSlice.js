import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: [],
  reducers: {
    setVideos: (state, action) => {
          return action.payload; 
    },
    removeVideos: () => {
      return [];
    },
  },
});

export const { setVideos, removeVideos } = videosSlice.actions;
export default videosSlice.reducer;
