import React from "react";
import RouterPage from "./routes"
import Navbar from "./components/Navbar"

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <RouterPage />
    </>
  )
}

export default App;
