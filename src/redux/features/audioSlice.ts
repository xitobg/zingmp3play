import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AudioState {
  isPlay: boolean
  isMute: boolean
  songId: string
  infoSongPlayer: {}
  currentTime: number
  duration: number
}

const initialState: AudioState = {
  isPlay: false,
  isMute: false,
  songId: "ZZA9OZIO",
  infoSongPlayer: {},
  currentTime: 0,
  duration: 0
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
    },
    setSongId: (state, action: PayloadAction<string>) => {
      state.songId = action.payload
    },
    setInfoSongPlayer: (state, action: PayloadAction<object>) => {
      state.infoSongPlayer = action.payload
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    }
  }
})

export const {
  changeIconPlay,
  changeIconVolume,
  setSongId,
  setInfoSongPlayer,
  setCurrentTime,
  setDuration
} = audioSlice.actions
export default audioSlice.reducer