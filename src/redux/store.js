import { configureStore } from '@reduxjs/toolkit'
import tenancyReducer from "./tenancySlice"

export default configureStore({
  reducer: {
    tenancys: tenancyReducer
  },
})