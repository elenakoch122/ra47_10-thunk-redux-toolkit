import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  src: '',
};

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setSrc(state, action) {
      state.src = action.payload;
    },

    addToList(state, action) {
      state.list.unshift(action.payload);
    },
  },
});

export const { setSrc, addToList } = photoSlice.actions;
export default photoSlice.reducer;