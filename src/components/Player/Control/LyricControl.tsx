import React from "react"
import IconLyric from "../../Icons/Lyric"

const LyricControl: React.FC = () => {
  return(
    <button className="mx-2 my-0 style__buttons" title="Lyric & Karaoke">
      <IconLyric setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
    </button>
  )
}

export default LyricControl