import { configureStore } from '@reduxjs/toolkit';
import ActiveNavSlice from './nav-slice';

export const store = configureStore({
  reducer: {
    activeLink: ActiveNavSlice,
  },
});