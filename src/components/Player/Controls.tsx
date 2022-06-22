import React, { useState, useRef } from "react"
import IconPrevious from "../Icons/Previous"
import IconPlay from "../Icons/Play"
import IconPause from "../Icons/Pause"
import IconNext from "../Icons/Next"
import IconLyric from "../Icons/Lyric"
import IconRepeat from "../Icons/Repeat"
import IconShuffle from "../Icons/Shuffle"
import IconVolume from "../Icons/Volume"
import IconVolumeMute from "../Icons/VolumeMute"
import IconVolumeHalf from "../Icons/VolumeHalf"
import IconArrowUp from "../Icons/ArrowUp"
import Slider from "../Player/Slider"

interface controlsProps {
  thumbnail: string
  title: string
  artistsNames: string
  auRef: HTMLAudioElement | null
}

const Controls:React.FC<controlsProps> = ({ thumbnail, title, artistsNames, auRef }) => {

  const styleButtons = "p-2 flex justify-center items-center bg-transparent rounded-[25%] transition-all duration-200 hover:bg-[color:var(--color-secondary-bg-for-transparent)]"

  const [valueVolumeSlider, setValueVolumeSlider] = useState<number>((Number(localStorage.getItem("zing-volume")) * 100) || 0.5 * 100)
  const [isIconPlay, setIconPlay] = useState<boolean>(false)

  const handlePlaySong = () => {
    if(isIconPlay === true) {
      setIconPlay(false)
      if(auRef) {
        auRef.pause()
      }
    } else {
      setIconPlay(true)
      if(auRef) {
        auRef.play()
      }
    }
  }

  // let volumeUI

  // if (valueVolumeSlider == 0) {
  //   volumeUI =
  //     <button className={"mx-2 my-0 " + styleButtons} title="Mute">
  //       <IconVolumeMute setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
  //     </button>
  // }
  // if(valueVolumeSlider > 0) {
  //   volumeUI =
  //     <button className={"mx-2 my-0 " + styleButtons} title="Mute">
  //       <IconVolumeHalf setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
  //     </button>
  // }
  // if(valueVolumeSlider > 0.5) {
  //   volumeUI =
  //     <button className={"mx-2 my-0 " + styleButtons} title="Mute">
  //       <IconVolume setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
  //     </button>
  // }

  return (
    <div className="grid grid-cols-3 h-full mx-[10vw] z-[-1]">
      {/* Playing */}
      <div className="flex items-center">
        {/* Thumbnail */}
        <img
          src={thumbnail}
          alt=""
          className="h-[46px] rounded-[5px]"
        />
        {/* End Thumbnail */}

        {/* Track Info */}
        <div className="flex flex-col justify-center h-[46px] ml-3">
          <div className="font-semibold text-base text-[color:var(--color-text)] opacity-90 mb-1 truncate">{title}</div>
          <div className="text-xs opacity-60 text-[color:var(--color-text)] truncate">{artistsNames}</div>
        </div>
        {/* End Track Info */}
      </div>
      {/* End Playing */}

      {/* Mid Controls Button */}
      <div className="flex justify-center items-center">
        <button className={"mx-2 my-0 " + styleButtons} title="Previous Song">
          <IconPrevious setColor="white" setWidth="16px" setHeight="16px" />
        </button>
        {/* Play Song */}
        <button
          className={"w-[42px] h-[42px] mx-2 my-0 " + styleButtons}
          title="Play Song"
          onClick={ handlePlaySong }
        >
          {
            isIconPlay
            ? <IconPause setColor="white" setWidth="24px" setHeight="24px"/>
            : <IconPlay setColor="white" setWidth="24px" setHeight="24px"/>
          }
        </button>
        {/* End Play Song */}
        <button className={"mx-2 my-0 " + styleButtons} title="Next Song">
          <IconNext setColor="white" setWidth="16px" setHeight="16px" />
        </button>
      </div>
      {/* End Mid Controls Button */}

      {/* Right Controls Button */}
      <div className="flex justify-center items-center">
        <button className={"mx-2 my-0 " + styleButtons} title="Lyric & Karaoke">
          <IconLyric setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
        </button>
        <button className={"mx-2 my-0 " + styleButtons} title="Repeat">
          <IconRepeat setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
        </button>
        <button className={"mx-2 my-0 " + styleButtons} title="Shuffle">
          <IconShuffle setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
        </button>
        {/* <div onClick={ handleMuteVolume } > */}
          {/* { volumeUI } */}
        {/* </div> */}
        {/* Volume Slider */}
          <Slider
            setWidth={"84px"}
            setHeight={"4px"}
            percentSlider={valueVolumeSlider}
            toogleTooltip={false}
            getPercentSlider={(value: number) => {
              if(auRef) {
                localStorage.setItem("zing-volume", String(value / 100))
                setValueVolumeSlider(value)
                auRef.volume = value / 100
              }
            }}
          />
        {/* End Volume Slider */}
        <button className={"mx-2 my-0 " + styleButtons} title="Volume">
          <IconArrowUp setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
        </button>
      </div>
      {/* End Right Controls Button */}
    </div>
  )
}

export default Controls
