import { configureStore } from '@reduxjs/toolkit'
import { billDuReducer } from './Features/BillduReducer'

export const store = configureStore({
  reducer: {
    billdu: billDuReducer
  },
})