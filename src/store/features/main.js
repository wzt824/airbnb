import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false
    }
  },
  reducers: {
    changHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changHeaderConfigAction } = mainSlice.actions

export default mainSlice.reducer