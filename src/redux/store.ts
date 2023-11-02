import { configureStore } from '@reduxjs/toolkit';
import modalWelcomeSlice from './slices/modalWelcomeSlice';
import modalLoginSlice from './slices/modalLoginSlice';
import modalRegSlice from './slices/modalRegSlice';

const store = configureStore({
  reducer: {
    modalWelcome: modalWelcomeSlice,
    modalLogin: modalLoginSlice,
    modalRegistration: modalRegSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
