import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AudioState {
  isPlay: boolean
  isMute: boolean
  songId: string | null
  infoSongPlayer: object
  srcAudio: string
  currentTime: number
  duration: number
  volume: number
  isLoop: boolean
  autoPlay: boolean
  playlistSong: Array<object>
}

const initialState: AudioState = {
  isPlay: false,
  isMute: false,
  songId: localStorage.getItem("songId"),
  infoSongPlayer: {
    title: "",
    thumbnail: "",
    artistsNames: "",
  },
  srcAudio: "",
  currentTime: 0,
  duration: 0,
  volume: Number(localStorage.getItem("volume")) || 0.5,
  isLoop: false,
  autoPlay: false,
  playlistSong: [],
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
      state.infoSongPlayer = { ...action.payload }
    },
    setSrcAudio: (state, action: PayloadAction<string>) => {
      state.srcAudio = action.payload
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setLoop: (state, action: PayloadAction<boolean>) => {
      state.isLoop = action.payload
    },
    setAutoPlay: (state, action: PayloadAction<boolean>) => {
      state.autoPlay = action.payload
    },
    setPlaylistSong: (state, action: PayloadAction<Array<object>>) => {
      // console.log(action.payload)
      state.playlistSong = action.payload
    },
  }
})

export const {
  changeIconPlay,
  changeIconVolume,
  setSongId,
  setInfoSongPlayer,
  setCurrentTime,
  setDuration,
  setVolume,
  setLoop,
  setSrcAudio,
  setAutoPlay,
  setPlaylistSong,
} = audioSlice.actions
export default audioSlice.reducer