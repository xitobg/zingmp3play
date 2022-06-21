import React, { useState, useRef } from "react"
import { formatTime } from "../../utils/formatTime"

interface sliderBarProps {
  currentTimeSong: number
  durationTimeSong: number
  auRef: HTMLAudioElement | null
}

const SliderBar: React.FC<sliderBarProps> = ({ currentTimeSong, durationTimeSong, auRef}) => {

  const sliderRef = useRef<HTMLDivElement>(null)

  // Percent Song
  let percentSliderSong = ((currentTimeSong / durationTimeSong) * 100)

  // Active UI Dot Slider Hover
  const [isActiveSliderDotHover, setActiveSliderDotHover] = useState<boolean>(false)
  // Active UI Tooltip Dot Hover
  const [isActiveSliderTooltipHover, setActiveSliderTooltipHover] = useState<boolean>(false)

  // Handler Active Dot Slider Hover
  const handleActiveSliderDotHover = (handle: boolean) => {
    setActiveSliderDotHover(handle)
  }

  // Handler Active Tooltip Dot Hover
  const handleActiveSliderTooltipHover = (handle: boolean) => {
    setActiveSliderTooltipHover(handle)
  }

  return (
    // Slider Bar
    <div className="w-full my-[-6px]">
      {/* Slider Bar Progress */}
      <div
        className="py-[6px] px-0 w-full cursor-pointer"
        onMouseOver={() => handleActiveSliderDotHover(true)}
        onMouseOut={() => handleActiveSliderDotHover(false)}
        ref={sliderRef}
        onMouseDown={(e) => {
          // console.log("Mouse Down")

          /*
            |-------|----------------------| <-- Slider Bar
            ^       ^                      ^
            |       |                      |
            |    clientX                   |
            |_____Slider Offset Width______|
          */

          if(sliderRef.current) {
            let percentSliderWidth  = (e.clientX / sliderRef.current.offsetWidth) * 100
            if(auRef) {
              auRef.currentTime = (auRef.duration / 100) * percentSliderWidth
            }
          }

          const handleMouseMove = (e: MouseEvent) => {
            // console.log("Mouse Move")
            if(sliderRef.current) {
              let percentSliderWidth = (e.clientX / sliderRef.current.offsetWidth) * 100
              if(auRef) {
                auRef.currentTime = (auRef.duration / 100) * percentSliderWidth
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
        {/* Slider Bar Rail */}
        <div className="relative w-full h-[2px] transition-[width,height,left,right,top,bottom] bg-[hsla(0,0%,50.2%,.18)] rounded-[15px]">
          {/* React Slider Progress
            * Change Slider Progress -> width: 23%
          */}
          <div
            className="h-[2px] top-0 left-[0%] transition-[width,left] duration-[0s] absolute z-[1] bg-[#335eea] rounded-[15px]"
            style={{
              width: `${percentSliderSong}%`
            }}
          ></div>
          {/* End React Slider Process  */}

          {/* React Slider Dot
            * Change Slider Dot -> left: 23%
          */}
          <div
            className="absolute z-[5] w-3 h-3 top-[50%] translate-x-[-50%] translate-y-[-50%] transition-[left]"
            style={{
              left: `${percentSliderSong}%`
            }}
          >
            {/* Dot Handle */}
            <div
              className={"cursor-pointer w-full h-full rounded-full bg-[#fff] box-border " +
                (isActiveSliderDotHover ? "visible": "invisible")
              }
              onMouseOver={() => handleActiveSliderTooltipHover(true)}
              onMouseOut={() => handleActiveSliderTooltipHover(false)}
            >
            </div>
            {/* End Dot Handle */}

            {/* Dot Tooltip */}
            <div className={"top-[-10px] left-[50%] translate-x-[-50%] translate-y-[-100%] absolute " +(isActiveSliderTooltipHover ? "visible" : "invisible")}>
              <div className="text-sm font-medium whitespace-nowrap px-[6px] py-[2px] min-w-[20px] text-center text-[#000] rounded-[5px] bg-[#fff] box-content">
                <span>{formatTime(currentTimeSong)}</span>
              </div>
            </div>
            {/* End Dot Tooltip */}
          </div>
          {/* End React Slider Dot */}
        </div>
        {/* End Slider Bar Rail */}
      </div>
      {/* End Slider Bar Progress */}
    </div>
    // End Slider Bar
  )
}

export default SliderBar
