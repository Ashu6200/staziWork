import { configureStore } from '@reduxjs/toolkit';
import propertiesSlice from './propertiesSlice';

export const store = configureStore({
  reducer: {
    properties: propertiesSlice,
  },
});
