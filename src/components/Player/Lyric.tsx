import React from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { setOpenLyric } from "../../redux/features/audioSlice"
import IconArrowDown from "../../components/Icons/ArrowDow"
import useLyric from "../../hooks/lyric"

const Lyric:React.FC = () => {

  const isLyric = useAppSelector((state) => state.audio.isLyric)
  const songId = useAppSelector((state) => state.audio.songId)

  // const [lyric, setLyric] = useState<Array<object> | undefined>()

  const dispatch = useAppDispatch()

  const handleCloseLyric = () => {
    isLyric
    ? dispatch(setOpenLyric(false))
    : dispatch(setOpenLyric(true))
  }

  const lyric = useLyric(songId)

  return (
    <>
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

        {/* Lyric */}
        <div className="font-semibold text-[28px] text-[color:var(--color-text)] max-w-2xl mx-auto my-0 h-full flex flex-col overflow-y-auto">

          <div className="mt-[50vh]"></div>
          {/* Line Lyric */}
          {
            lyric &&
            lyric.map((e:any) => {
              return (
                <div className="my-[2px] mx-0 px-[18px] py-3 rounded-xl hover:bg-[color:var(--color-secondary-bg-for-transparent)] box-border">
                  <span
                    className="cursor-pointer inline-block opacity-90"
                  >
                    {e.data}
                  </span>
                </div>
              )
            })
          }
          {/* End Line Lyric*/}
        </div>
        {/* End Lyric */}
      </div>
    </>
  )
}

export default Lyric
