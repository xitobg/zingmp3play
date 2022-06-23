import React, { useEffect, useRef } from "react"
import Controls from "./Control"
import { getSong, getInfoSong } from "../../api/song"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { setInfoSongPlayer, setCurrentTime, setDuration, setSrcAudio } from "../../redux/features/audioSlice"

const Player:React.FC = () => {

  const songId = useAppSelector((state) => state.audio.songId)
  const srcAudio = useAppSelector((state) => state.audio.srcAudio)
  const isLoop = useAppSelector((state) => state.audio.isLoop)
  const dispath = useAppDispatch()

  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    (
      async () => {
        const src = await getSong(songId)
        src[128] ? dispath(setSrcAudio( src[128] )) : dispath(setSrcAudio(""))
        dispath(setInfoSongPlayer(await getInfoSong(songId)))
      }
    )()
  }, [songId, dispath])

  return (
    <>
      <div className="flex flex-col justify-around h-16 backdrop-saturate-[180%] backdrop-blur-[30px] bg-[color:var(--color-navbar-bg)] fixed inset-x-0 bottom-0 z-[100]">
        {
          songId !== ""
          ?
          <Controls auRef={audioRef.current} />
          :
          ""
        }
      </div>

      <audio
        ref={audioRef}
        src={srcAudio}
        className="hidden"
        loop={isLoop}
        onTimeUpdate = {() => {
            if(audioRef.current) {
              dispath(setCurrentTime(
                (audioRef.current.currentTime)
              ))
            }
          }
        }
        onLoadedData = {() => {
            if(audioRef.current) {
              dispath(setDuration(
                (audioRef.current.duration)
              ))
            }
        }}
      />
    </>
  )
}

export default Player
