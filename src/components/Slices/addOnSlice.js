import { createSlice } from "@reduxjs/toolkit";

export const addOnsSlice = createSlice({
  name: "addOns",
  initialState: {
    addList: [],
  },
  reducers: {
    setaddOnDetail: (state, action) => {
      return { ...state, addList: [...state.addList, action.payload] };
    },
    deleteAddOn: (state, action) => {
      return {
        ...state,
        addList: state.addList.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { setaddOnDetail, deleteAddOn } = addOnsSlice.actions;
export default addOnsSlice.reducer;
