import { createSlice } from '@reduxjs/toolkit';

const ActiveNavSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    setActiveNavLink: (state,action) => {
      state.value = action.payload;
    }
  },
});

export const { setActiveNavLink } = ActiveNavSlice.actions;
export default ActiveNavSlice.reducer;