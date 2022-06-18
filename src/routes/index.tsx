import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Playlist from "../pages/Playlist"

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/playlist" element={<Playlist />}>
        <Route path=":playlistId" element={<Playlist />} />
      </Route>
    </Routes>
  )
}

export default App;
