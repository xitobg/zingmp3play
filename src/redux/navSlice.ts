import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isActive: false
}

const navSlice = createSlice({
  name: "toogleContextMenu",
  initialState,
  reducers: {
    toogle: (state, action) => {
      state.isActive = action.payload
    }
  }
})

export const { toogle } = navSlice.actions
export default navSlice.reducer
