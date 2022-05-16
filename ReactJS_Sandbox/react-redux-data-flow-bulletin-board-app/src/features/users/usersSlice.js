import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Jake Lebowski' },
  { id: '1', name: 'Ryan Zebowski' },
  { id: '2', name: 'Dave Rebowski' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
