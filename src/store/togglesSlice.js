import { createSlice } from "@reduxjs/toolkit";

const togglesSlice = createSlice({
  name: "toggles",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export const {toggleMenu} = togglesSlice.actions;
export default togglesSlice.reducer;
