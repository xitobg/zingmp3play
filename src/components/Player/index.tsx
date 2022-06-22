import React, { useEffect, useState, useRef, useContext } from "react"
import Slider from "./Slider"
import Controls from "./Controls"
import { getInfoSongPlayer } from "../../api/song"
import { PlayerContext } from "../../context/PlayerContext"

const Player:React.FC = () => {

  const [datainfoSongPlayer, setDatainfoSongPlayer] = useState<object | any>()

  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)

  const audioRef = useRef<HTMLAudioElement>(null)

  const player = useContext(PlayerContext)
  // const { iconPlay, songId } = useContext(PlayerContext)

  useEffect(() => {
    (
      async () => {
        // console.log(await getInfoSongPlayer("ZUUECEIC"))
        // console.log(player.songId )
        setDatainfoSongPlayer(await getInfoSongPlayer(player.songId))
      }
    )()
  }, [player.songId])

  return (
    <div className="flex flex-col justify-around h-16 backdrop-saturate-[180%] backdrop-blur-[30px] bg-[color:var(--color-navbar-bg)] fixed inset-x-0 bottom-0 z-[100]">

      {
        audioRef.current &&
        <Slider
          setWidth={"100%"}
          setHeight={"2px"}
          percentSlider={ (currentTime / duration) * 100 }
          getPercentSlider={(value: number) => {
            if(audioRef.current) {
              audioRef.current.currentTime = (value / 100) * audioRef.current.duration
            }
          }}
          toogleTooltip={true}
          currentTimeSongTooltip={audioRef.current.currentTime}
        />
      }

      {
        datainfoSongPlayer &&
        <Controls
          thumbnail={datainfoSongPlayer.thumbnail}
          title={datainfoSongPlayer.title}
          artistsNames={datainfoSongPlayer.artistsNames}
          auRef={audioRef.current}
        />
      }

      {
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
      }
    </div>

  )
}

export default Player
