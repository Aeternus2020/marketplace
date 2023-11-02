import { createSlice } from '@reduxjs/toolkit';

const modalWelcomeSlice = createSlice({
  name: 'welcome',
  initialState: {
    statusWelcome: false,
    statusButtonLogin: true,
  },
  reducers: {
    openFormWelcome(state) {
      state.statusWelcome = true;
    },
    closeFormWelcome(state) {
      state.statusWelcome = false;
      state.statusButtonLogin = false;
    },
    openAppWelcome(state) {
      state.statusWelcome = false;
      state.statusButtonLogin = true;
    },
  },
});

export default modalWelcomeSlice.reducer;
export const { openFormWelcome, closeFormWelcome, openAppWelcome } =
  modalWelcomeSlice.actions;
