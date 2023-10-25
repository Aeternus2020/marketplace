import { createSlice } from '@reduxjs/toolkit';

const modalLoginSlice = createSlice({
  name: 'login',
  initialState: {
    statusLogin: false,
    statusButtonLogin: true,
  },
  reducers: {
    openForm(state) {
      state.statusLogin = true;
    },
    closeForm(state) {
      state.statusLogin = false;
      state.statusButtonLogin = false;
    },
    openApp(state) {
      state.statusLogin = false;
      state.statusButtonLogin = true;
    },
  },
});

export default modalLoginSlice.reducer;
export const { openForm, closeForm, openApp } = modalLoginSlice.actions;
