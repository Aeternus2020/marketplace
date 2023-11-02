import { createSlice } from '@reduxjs/toolkit';

const modalRegSlice = createSlice({
  name: 'registration',
  initialState: {
    statusRegistration: false,
    statusButtonRegistration: true,
  },
  reducers: {
    openFormReg(state) {
      state.statusRegistration = true;
    },
    closeFormReg(state) {
      state.statusRegistration = false;
      state.statusButtonRegistration = false;
    },
    openAppReg(state) {
      state.statusRegistration = false;
      state.statusButtonRegistration = true;
    },
  },
});

export default modalRegSlice.reducer;
export const { openFormReg, closeFormReg, openAppReg } = modalRegSlice.actions;
