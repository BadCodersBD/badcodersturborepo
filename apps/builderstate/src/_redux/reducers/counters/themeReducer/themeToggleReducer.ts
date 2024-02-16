import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  dark: boolean;
}

const initialState: ThemeState = {
  dark: false,
};

const themeToggleSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.dark = !state.dark;
    },
  },
});

export const { toggle } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;
