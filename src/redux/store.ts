import { configureStore } from '@reduxjs/toolkit';
import modalLoginSlice from './slices/modalLoginSlice';

const store = configureStore({
  reducer: {
    modalLogin: modalLoginSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
