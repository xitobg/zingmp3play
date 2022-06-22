import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AudioState {
  isPlay: boolean
  isMute: boolean
}

const initialState: AudioState = {
  isPlay: false,
  isMute: false
}

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    changeIconPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload
    },
    changeIconVolume: (state, action: PayloadAction<boolean>) => {
      state.isMute = action.payload
    }
  }
})

export const { changeIconPlay, changeIconVolume } = audioSlice.actions
export default audioSlice.reducer