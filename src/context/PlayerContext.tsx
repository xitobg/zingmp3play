import { createContext } from "react"

interface typePlayerContext {
  songId: string
  setSongId: Function
  iconPlay: boolean
  setIconPlay: Function
}

const PlayerContext = createContext<typePlayerContext>({
  songId: "",
  setSongId: () => {},
  iconPlay: false,
  setIconPlay: () => {}
})

export { PlayerContext }