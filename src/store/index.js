import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./features/home"
import entireReducer from "./features/entire"
import entireTwoReducer from "./features/entireTwo"

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    entireTwo: entireTwoReducer
  }
})

export default store