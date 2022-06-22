import React, { useState } from "react";
import RouterPage from "./routes"
import Navbar from "./components/Navbar"
import Player from "./components/Player";
import { PlayerContext } from "./context/PlayerContext"

const App: React.FC = () => {

  const [playerId, setPlayerId] = useState<string>("ZUFZ0CD6")
  const [iconPlay, setIconPlay] = useState<boolean>(false)

  return (
    <PlayerContext.Provider
      value={{
        songId: playerId,
        setSongId: (e:any) => {setPlayerId(e)},
        iconPlay: iconPlay,
        setIconPlay: (e:any) => {setIconPlay(e); console.log(e)},
      }}
    >
      <Navbar />
      <RouterPage />
      <Player />
    </PlayerContext.Provider>
  )
}

export default App;
