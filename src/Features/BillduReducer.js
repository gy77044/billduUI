import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: 1
}

export const billDuReducer = createSlice({
  name: 'billdu',
  initialState,
  reducers: {
    isSetOpen: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { isSetOpen } = billDuReducer.actions

export default billDuReducer.reducer