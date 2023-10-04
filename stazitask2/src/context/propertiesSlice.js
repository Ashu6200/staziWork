import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCity: 'New York',
  properties: [],
};

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      state.activeCity = action.payload;
    },
    setProperties: (state, action) => {
      state.properties = action.payload;
    },
  },
});

export const { setActiveCity, setProperties, loadMoreProperties } =
  propertiesSlice.actions;

export default propertiesSlice.reducer;
