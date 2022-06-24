import React, { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { setOpenLyric } from "../../redux/features/audioSlice"
import IconArrowDown from "../../components/Icons/ArrowDow"
import { getLyric } from "../../api/lyric"

const Lyric:React.FC = () => {

  const isLyric = useAppSelector((state) => state.audio.isLyric)
  const songId = useAppSelector((state) => state.audio.songId)

  const dispatch = useAppDispatch()

  const handleCloseLyric = () => {
    isLyric
    ? dispatch(setOpenLyric(false))
    : dispatch(setOpenLyric(true))
  }

  // useEffect(() => {
  //   (
  //     async () => {
  //       if(songId !== null && songId !== "") {
  //         const a = await getLyric(songId)
  //         console.log(a)
  //       }
  //     }
  //   )()
  // }, [songId])

  return(
    <div className={ "fixed inset-0 z-[200] bg-slate-900 transition-all ease-linear duration-300 " + (isLyric ? "animate-[lyric-up_1s]" : "hidden") }>
      {/* Close Button */}
      <button
        className="p-2 mx-3 my-3 bg-transparent rounded-[25%] transition-all duration-200 hover:bg-[color:var(--color-secondary-bg-for-transparent)] fixed top-6 right-6"
        title="Close"
        onClick={ handleCloseLyric }
      >
        <IconArrowDown setColor="white" setWidth="24px" setHeight="24px" />
      </button>
      {/* End Close Button */}
    </div>
  )
}

export default Lyric