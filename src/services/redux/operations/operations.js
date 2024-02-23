import { createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from 'services/API/api';

export const fetchVehicles = createAsyncThunk(
  'fetchVehicles',
  async (signal, thunkAPI) => {
    try {
      return await getData(signal);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
