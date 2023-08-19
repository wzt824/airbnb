import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./features/home"
import entireReducer from "./features/entire"
import entireTwoReducer from "./features/entireTwo"
import detailReducer from "./features/detail"
import mainReducer from "./features/main"

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    entireTwo: entireTwoReducer,
    detail: detailReducer,
    main: mainReducer
  }
})

export default store