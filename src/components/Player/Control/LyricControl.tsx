import React from "react"
import IconLyric from "../../Icons/Lyric"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { setOpenLyrics } from "../../../redux/features/audioSlice"

const LyricControl:React.FC = () => {

  const isLyrics = useAppSelector((state) => state.audio.isLyrics)
  const dispatch = useAppDispatch()

  const handleOpenLyrics = () => {
    isLyrics
    ? dispatch(setOpenLyrics(false))
    : dispatch(setOpenLyrics(true))
  }

  return(
    <div
      onClick={ handleOpenLyrics }
    >
      <button className="mx-2 my-0 style__buttons" title="Lyric & Karaoke">
        <IconLyric setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
      </button>
    </div>
  )
}

export default LyricControl