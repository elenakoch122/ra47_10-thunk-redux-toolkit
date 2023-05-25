import { createSlice } from "@reduxjs/toolkit";
import { factsStarWars } from "../data/factsStarWars";

const initialState = {
  count: '',
  facts: factsStarWars,
  shownFacts: [],
};

const factsSlice = createSlice({
  name: 'facts',
  initialState,
  reducers: {
    showFacts(state, action) {
      state.shownFacts = [];
      if (!action.payload) return;
      for (let i = 1; i <= +action.payload; i++) state.shownFacts.push(state.facts[i - 1]);
    },

    changeCount(state, action) {
      if (action.payload < 0 || action.payload > 5) return;
      state.count = action.payload;
    },
  },
});

export const { showFacts, changeCount } = factsSlice.actions;
export default factsSlice.reducer;