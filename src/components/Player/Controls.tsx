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

interface controlsProps {
  thumbnail: string
  title: string
  artistsNames: string
  auRef: HTMLAudioElement | null
}

const Controls:React.FC<controlsProps> = ({ thumbnail, title, artistsNames, auRef }) => {

  const sliderVolumeRef = useRef<HTMLDivElement>(null)

  const styleButtons = "p-2 flex justify-center items-center bg-transparent rounded-[25%] transition-all duration-200 hover:bg-[color:var(--color-secondary-bg-for-transparent)]"

  const [valueVolumeSlider, setValueVolumeSlider] = useState<number>(Number(localStorage.getItem("zing-volume")) || 0.5)
  const [isIconPlay, setIconPlay] = useState<boolean>(false)

  // Active UI Dot Slider Hover
  const [isActiveDotVolumeSliderHover, setActiveDotVolumeSliderHover] = useState<boolean>(false)

  // handle Active Volume Slider Hover
  const handleActiveDotVolumeSlider = (handle: boolean) => {
    setActiveDotVolumeSliderHover(handle)
  }

  const handleMuteVolume = () => {
    if(valueVolumeSlider == 0) {
      if(auRef) {
        auRef.volume = Number(localStorage.getItem("zing-volume"))
      }
      setValueVolumeSlider(Number(localStorage.getItem("zing-volume")))
    } else {
      setValueVolumeSlider(0)
      if(auRef) {
        auRef.volume = 0
      }
    }
  }

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

  let volumeUI

  if (valueVolumeSlider == 0) {
    volumeUI =
      <button className={"mx-2 my-0 " + styleButtons} title="Mute">
        <IconVolumeMute setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
      </button>
  }
  if(valueVolumeSlider > 0) {
    volumeUI =
      <button className={"mx-2 my-0 " + styleButtons} title="Mute">
        <IconVolumeHalf setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
      </button>
  }
  if(valueVolumeSlider > 0.5) {
    volumeUI =
      <button className={"mx-2 my-0 " + styleButtons} title="Mute">
        <IconVolume setColor="var(--color-text)" setWidth="16px" setHeight="16px" />
      </button>
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
        <div onClick={ handleMuteVolume } >
          { volumeUI }
        </div>
        {/* Volume Slider */}
        <div
          className="w-[84px] cursor-pointer relative"
          // onMouseOver={ () => handleActiveDotSlider(true)}
          // onMouseOut={ () => handleActiveDotSlider(false)}
        >
          <div
            className="py-[6px] px-0"
            onMouseOver={() => handleActiveDotVolumeSlider(true)}
            onMouseOut={() => handleActiveDotVolumeSlider(false)}
            ref={sliderVolumeRef}
            onMouseDown={(e) => {
              // console.log("Mouse Down")

              /*
                               |<- Slider Volume ->|
                |--------------|------|------------|---|
                ^              ^      ^            ^
                |---Bounding---|      |            |
                |______________|___clientX         |
                               |Slider Offset Width|
              */

              if(sliderVolumeRef.current) {
                let percentSliderVolumeWidth  = ((e.clientX - sliderVolumeRef.current.getBoundingClientRect().left) / sliderVolumeRef.current.offsetWidth) * 100
                if(auRef) {
                  if(percentSliderVolumeWidth < 0) {
                    setValueVolumeSlider(0)
                    localStorage.setItem("zing-volume", String(0))
                    auRef.volume = 0
                  }
                  if(percentSliderVolumeWidth > 100) {
                    localStorage.setItem("zing-volume", String(1))
                    setValueVolumeSlider(1)
                    auRef.volume = 1
                  }
                  if(percentSliderVolumeWidth > 0 && percentSliderVolumeWidth < 100) {
                    localStorage.setItem("zing-volume", String(percentSliderVolumeWidth / 100))
                    setValueVolumeSlider(percentSliderVolumeWidth / 100)
                    auRef.volume = percentSliderVolumeWidth / 100
                  }
                }
              }

              const handleMouseMove = (e: MouseEvent) => {
                // console.log("Mouse Move")
                if(sliderVolumeRef.current) {
                  let percentSliderVolumeWidth  = ((e.clientX - sliderVolumeRef.current.getBoundingClientRect().left) / sliderVolumeRef.current.offsetWidth) * 100
                  if(auRef) {
                    if(percentSliderVolumeWidth < 0) {
                      setValueVolumeSlider(0)
                      auRef.volume = 0
                    }
                    if(percentSliderVolumeWidth > 100) {
                      setValueVolumeSlider(1)
                      auRef.volume = 1
                    }
                    if(percentSliderVolumeWidth > 0 && percentSliderVolumeWidth < 100) {
                      setValueVolumeSlider(percentSliderVolumeWidth / 100)
                      auRef.volume = percentSliderVolumeWidth / 100
                    }
                  }
                }
              }

              // Add Event Mouse Move
              window.addEventListener("mousemove", handleMouseMove)

              // Add Event Mouse Up
              window.addEventListener(
                "mouseup",
                () => {
                // Remove Event Mouse Move
                  window.removeEventListener("mousemove", handleMouseMove)
                }
              )
            }}
          >
            {/* React Volume Slider Rail */}
            <div className="w-full bg-[hsla(0,0%,50.2%,.18)] rounded-[15px] h-1">
              {/* Slider Progress
                Change Progress -> width: 23%
              */}
              <div
                className="h-full top-0 left-0 transition-[width] bg-[color:var(--color-primary)] rounded-[15px]"
                style={{
                  width: `${valueVolumeSlider * 100}%`
                }}
              >
              </div>
              {/* End Slider Progress */}

              {/* Volume Slider Dot
                Change Volume -> left: 23%
              */}
              <div
                className="absolute w-3 h-3 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${valueVolumeSlider * 100}%`
                }}
              >
                {/* Dot Handle */}
                <div className={"w-full h-full rounded-full bg-[#fff] box-border " + (isActiveDotVolumeSliderHover ? "visible" : "invisible")}>
                </div>
                {/* End Dot Handle */}
              </div>
              {/* End Volume Slider Dot */}
              </div>
              {/* End React Volume Slider Rail */}
          </div>
        </div>
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
