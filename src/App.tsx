import React from "react";
import RouterPage from "./routes"
import Navbar from "./components/Navbar"
import Player from "./components/Player";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <RouterPage />
      <Player />
    </>
  )
}

export default App;
