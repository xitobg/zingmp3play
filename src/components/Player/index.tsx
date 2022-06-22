import React, { useEffect, useRef } from "react"
import Controls from "./Control"
import { getInfoSongPlayer } from "../../api/song"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { setInfoSongPlayer, setCurrentTime, setDuration } from "../../redux/features/audioSlice"

const Player:React.FC = () => {

  const songId = useAppSelector((state) => state.audio.songId)
  const info:any = useAppSelector((state) => state.audio.infoSongPlayer)
  const dispath = useAppDispatch()

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    (
      async () => {
        dispath(setInfoSongPlayer(
          (await getInfoSongPlayer(songId))
        ))
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
        src={info.linkSong}
        className="hidden"
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
