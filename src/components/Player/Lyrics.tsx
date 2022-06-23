import React from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { setOpenLyrics } from "../../redux/features/audioSlice"
import IconArrowDown from "../../components/Icons/ArrowDow"

const Lyric:React.FC = () => {

  const isLyrics = useAppSelector((state) => state.audio.isLyrics)

  const dispatch = useAppDispatch()

  const handleCloseLyrics = () => {
    isLyrics
    ? dispatch(setOpenLyrics(false))
    : dispatch(setOpenLyrics(true))
  }

// flex justify-center items-center bg-transparent rounded-[25%] transition-all duration-200 hover:bg-[color:var(--color-secondary-bg-for-transparent)]
  return(
    <div className={ "fixed inset-0 z-[200] bg-slate-900 transition-all ease-linear duration-300 " + (isLyrics ? "block" : "hidden") }>
      {/* Close Button */}
      <button
        className="p-2 mx-3 my-3 bg-transparent rounded-[25%] transition-all duration-200 hover:bg-[color:var(--color-secondary-bg-for-transparent)]"
        title="Close"
        onClick={ handleCloseLyrics }
      >
        <IconArrowDown setColor="white" setWidth="24px" setHeight="24px" />
      </button>
      {/* End Close Button */}
    </div>
  )
}

export default Lyric