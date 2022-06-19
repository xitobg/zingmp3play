import React from "react"
import ProgressBar from "./ProgressBar"
import Controls from "./Controls"

const Player:React.FC = () => {
  return (
    <div className="flex flex-col justify-around h-16 backdrop-saturate-[180%] backdrop-blur-[30px] bg-[color:var(--color-navbar-bg)] fixed inset-x-0 bottom-0 z-[100]">
      <ProgressBar />
      <Controls />
    </div>
  )
}

export default Player
