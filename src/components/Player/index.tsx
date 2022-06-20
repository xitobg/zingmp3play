import React from "react"
import ProgressBar from "./ProgressBar"
import Controls from "./Controls"

const Player:React.FC = () => {
  return (
    <div className="flex flex-col justify-around h-16 backdrop-saturate-[180%] backdrop-blur-[30px] bg-[color:var(--color-navbar-bg)] fixed inset-x-0 bottom-0 z-[100]">
      <ProgressBar />
      <Controls thumbnail="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/c/1/f/ec1fcdefabbc8fea32a2eb23301837d3.jpg" title="Anh Kết Em Rồi (Single)" artistsNames="Miu Lê, Karik, Châu Đăng Khoa"/>
    </div>
  )
}

export default Player
