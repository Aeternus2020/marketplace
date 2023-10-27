import { createSlice } from '@reduxjs/toolkit';

const modalWelcomeSlice = createSlice({
  name: 'welcome',
  initialState: {
    statusWelcome: false,
    statusButtonLogin: true,
  },
  reducers: {
    openForm(state) {
      state.statusWelcome = true;
    },
    closeForm(state) {
      state.statusWelcome = false;
      state.statusButtonLogin = false;
    },
    openApp(state) {
      state.statusWelcome = false;
      state.statusButtonLogin = true;
    },
  },
});

export default modalWelcomeSlice.reducer;
export const { openForm, closeForm, openApp } = modalWelcomeSlice.actions;
