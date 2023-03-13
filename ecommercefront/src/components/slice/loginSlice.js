import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { visible: false },

  reducers: {
    toggle(state) {
      state.visible = !state.visible;
    }
  }
});

export const loginActions = loginSlice.actions;
export default loginSlice;