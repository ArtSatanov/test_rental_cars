import { createSlice } from '@reduxjs/toolkit';
import { handlerFulfilled, handlerPending, handlerRejected } from './handlers';
import { fetchVehicles } from '../../operations/operations';

const initialState = {
  item: [],
  isLoading: false,
  error: null,
};

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchVehicles.pending, handlerPending);
    builder.addCase(fetchVehicles.fulfilled, handlerFulfilled);
    builder.addCase(fetchVehicles.rejected, handlerRejected);
  },
});

export const vehiclesReducer = vehiclesSlice.reducer;
