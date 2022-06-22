import React, { useEffect, useState } from "react"
import Controls from "./Control"
import { getInfoSongPlayer } from "../../api/song"

const Player:React.FC = () => {

  const [datainfoSongPlayer, setDatainfoSongPlayer] = useState<object | any>({})

  // const audioRef = useRef<HTMLAudioElement>(null)

  // useEffect(() => {
  //   (
  //     async () => {
  //       // console.log(await getInfoSongPlayer("ZUUECEIC"))
  //       setDatainfoSongPlayer(await getInfoSongPlayer("ZUUECEIC"))
  //     }
  //   )()
  // }, [])

  return (
    <div className="flex flex-col justify-around h-16 backdrop-saturate-[180%] backdrop-blur-[30px] bg-[color:var(--color-navbar-bg)] fixed inset-x-0 bottom-0 z-[100]">
      {
        datainfoSongPlayer &&
        <Controls />
      }

      {/* {
        datainfoSongPlayer &&
        <audio
          ref={audioRef}
          src={datainfoSongPlayer.linkSong}
          className="hidden"
          onTimeUpdate = {() => {
              if(audioRef.current) {
                setCurrentTime(audioRef.current.currentTime)
              }
            }
          }
          onLoadedData = {() => {
              if(audioRef.current) {
                setDuration(audioRef.current.duration)
              }
          }}
        />
      } */}
    </div>

  )
}

export default Player
