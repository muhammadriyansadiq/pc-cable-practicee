
import { configureStore } from '@reduxjs/toolkit';
import Counterslice from "./CounterSlice.jsx"
export const store = configureStore({
  reducer: {
    counter: Counterslice,
  },

});
