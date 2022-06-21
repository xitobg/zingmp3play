import React, { useEffect, useState, useRef } from "react"
import ProgressBar from "./ProgressBar"
import Controls from "./Controls"
import { getSong, getInfoSong } from "../../api/song"

const Player:React.FC = () => {

  const [dataSong, setDataSong] = useState<string>("")
  const [songThumbnail, setSongThumbnail] = useState<string>("")
  const [songTitle, setSongTitle] = useState<string>("")
  const [songArtistsNames, setSongArtistsNames] = useState<string>("")

  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    (
      async () => {
        const infosong  = await getInfoSong("ZZDI9B7U")
        const data = await getSong("ZZDI9B7U")
        setSongThumbnail(infosong.thumbnail)
        setSongTitle(infosong.title)
        setSongArtistsNames(infosong.artistsNames)
        setDataSong(data[128])
      }
    )()
  }, [])

  return (
    <div className="flex flex-col justify-around h-16 backdrop-saturate-[180%] backdrop-blur-[30px] bg-[color:var(--color-navbar-bg)] fixed inset-x-0 bottom-0 z-[100]">

      <ProgressBar
        c={currentTime}
        d={duration}
      />

      <Controls
        thumbnail={songThumbnail}
        title={songTitle}
        artistsNames={songArtistsNames}
        auRef={audioRef.current}
      />

      <audio
        ref={audioRef}
        src={dataSong}
        onTimeUpdateCapture = {() => {
            if(audioRef.current) {
              setCurrentTime(audioRef.current.currentTime)
            }
          }
        }
        onLoadedDataCapture = {() => {
            if(audioRef.current) {
              setDuration(audioRef.current.duration)
              console.log(audioRef.current.duration)
            }
        }}
      />
    </div>

  )
}

export default Player
