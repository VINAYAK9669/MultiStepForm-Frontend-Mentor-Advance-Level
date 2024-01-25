import { createSlice } from "@reduxjs/toolkit";
export const planInfo = createSlice({
  name: "plan",
  initialState: {
    id: 1,
    price: 12,
    name: "Advanced",
  },
  reducers: {
    planID: (state, action) => {
      state.id = action.payload;
    },
    price: (state, action) => {
      state.price = action.payload;
    },
    name: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { planID, price, name } = planInfo.actions;
export default planInfo.reducer;
