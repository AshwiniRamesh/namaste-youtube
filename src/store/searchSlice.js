import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, actions) => {
      return { ...state, ...actions.payload };
    },
  },
});
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

//if we store it in array like [query1,quer2,qyuery3] time complexity is O(n),
// incase of object its O(1) because {query1:"val",query2:"val",query3:"val"}
