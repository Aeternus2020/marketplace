import { createSlice } from '@reduxjs/toolkit';

const modalLoginSlice = createSlice({
  name: 'login',
  initialState: {
    statusLogin: false,
    statusButtonLogin: true,
  },
  reducers: {
    openFormLogin(state) {
      state.statusLogin = true;
    },
    closeFormLogin(state) {
      state.statusLogin = false;
      state.statusButtonLogin = false;
    },
    openAppLogin(state) {
      state.statusLogin = false;
      state.statusButtonLogin = true;
    },
  },
});

export default modalLoginSlice.reducer;
export const { openFormLogin, closeFormLogin, openAppLogin } =
  modalLoginSlice.actions;
