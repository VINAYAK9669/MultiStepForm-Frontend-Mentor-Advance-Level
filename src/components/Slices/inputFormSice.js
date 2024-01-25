import { createSlice } from "@reduxjs/toolkit";

export const personalInfo = createSlice({
  name: "inputForm",
  initialState: {
    name: "",
    email: "",
    number: "",
  },
  reducers: {
    handlePersonalInfo: {
      prepare(name, email, number) {
        return {
          payload: { name, email, number },
        };
      },
      reducer(state, action) {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.number = action.payload.number;
      },
    },
  },
});

export const { handlePersonalInfo } = personalInfo.actions;

export default personalInfo.reducer;
