import { configureStore } from '@reduxjs/toolkit'
import BillduReducer from './Features/BillduReducer'

export const store = configureStore({
  reducer: {
    billdu: BillduReducer
  },
})