import React, { useState } from "react"
import IconPrevious from "../Icons/Previous"
import IconPlay from "../Icons/Play"
import IconPause from "../Icons/Pause"
import IconNext from "../Icons/Next"
import IconLyric from "../Icons/Lyric"
import IconRepeat from "../Icons/Repeat"
import IconShuffle from "../Icons/Shuffle"
import IconVolume from "../Icons/Volume"
import IconVolumeMute from "../Icons/VolumeMute"
import IconArrowUp from "../Icons/ArrowUp"
import Slider from "../Player/Slider"

interface controlsProps {
  thumbnail: string
  title: string
  artistsNames: string
  auRef: HTMLAudioElement | null
}

const Controls:React.FC<controlsProps> = ({ thumbnail, title, artistsNames, auRef }) => {

  // Style Buttons
  const styleButtons = "p-2 flex justify-center items-center bg-transparent rounded-[25%] transition-all duration-200 hover:bg-[color:var(--color-secondary-bg-for-transparent)]"

  // Value Volume
  const [valueVolumeSlider, setValueVolumeSlider] = useState<number>((Number(localStorage.getItem("zing-volume")) * 100) || 0.5 * 100)

  // Active Play & Pause
  const [isIconPlay, setIconPlay] = useState<boolean>(false)

  // Handle Mute Volume
  const handleMuteVolume = () => {

    // valueVolume(0 -> 1)
    const toogleVolume = (valueVolume: number) => {
      if(auRef) {
        auRef.volume = valueVolume
        setValueVolumeSlider(valueVolume * 100)
      }
    }

    valueVolumeSlider !== 0
    ?
      toogleVolume(0)
    :
      toogleVolume(Number(localStorage.getItem("zing-volume")))
  }

  // Handle Play Button
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

        {/* Volume */}
        <div
          onClick={handleMuteVolume}
        >
          {
            valueVolumeSlider === 0
            ?
              <button className={"mx-2 my-0 " + styleButtons} title="Mute">
                <IconVolumeMute setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
              </button>
            :
              <button className={"mx-2 my-0 " + styleButtons} title="Mute">
                <IconVolume setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
              </button>
          }
        </div>
        {/* End Volume */}

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
