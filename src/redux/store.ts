import { configureStore } from '@reduxjs/toolkit';
import modalWelcomeSlice from './slices/modalWelcomeSlice';
import modalLoginSlice from './slices/modalLoginSlice';

const store = configureStore({
  reducer: {
    modalWelcome: modalWelcomeSlice,
    modalLogin: modalLoginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
