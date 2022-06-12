import { createSlice } from "@reduxjs/toolkit"

const navSlice = createSlice({
  name: "toogleContextMenu",
  initialState: {
    isActive: false
  },
  reducers: {
    toogle: (state, action) => {
      state.isActive = action.payload.isActive
    }
  }
})

export const { toogle } = navSlice.actions
export default navSlice.reducer
