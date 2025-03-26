import { configureStore } from "@reduxjs/toolkit";
import togglesSlice from './togglesSlice';

const store = configureStore({
reducer:{
          toggles: togglesSlice
}
})
export default store;
