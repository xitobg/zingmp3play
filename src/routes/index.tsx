import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import DetailPlaylist from "../pages/DetailPlaylist"

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/playlist" element={<DetailPlaylist />}>
        <Route path=":playlistId" element={<DetailPlaylist />} />
      </Route>
    </Routes>
  )
}

export default App;
