import React, { useState, useRef, useEffect } from "react"
import { formatTime } from "../../utils/formatTime"

interface a {
  c: number
  d: number
  auRef: HTMLAudioElement | null
}

const ProgressBar: React.FC<a> = ({ c, d, auRef}) => {

  const progressRef = useRef<HTMLDivElement>(null)
  let cd = ((c / d) * 100)

  const [isActiveProgressDotHover, setActiveProgressDotHover] = useState<boolean>(false)
  const [isActiveProgressTooltipHover, setActiveProgressTooltipHover] = useState<boolean>(false)

  const handleActiveProgressDotHover = (handle: boolean) => {
    setActiveProgressDotHover(handle)
  }

  const handleActiveProgressTooltipHover = (handle: boolean) => {
    setActiveProgressTooltipHover(handle)
  }

  return (
    // Progress Bar
    <div className="w-full my-[-6px]">
      {/* Progress Bar Slider */}
      <div
        className="py-[6px] px-0 w-auto cursor-pointer"
        onMouseOver={() => handleActiveProgressDotHover(true)}
        onMouseOut={() => handleActiveProgressDotHover(false)}
        onMouseDown={(e) => {
          console.log("Mouse Down")

          const hadleMouseMove = (e: MouseEvent) => {
            console.log("Mouse Move")
            if(progressRef.current) {
              if(auRef) {
              }
            }
          }

          window.addEventListener("mousemove", hadleMouseMove)

          window.addEventListener(
            "mouseup",
            () => {
              window.removeEventListener("mousemove", hadleMouseMove)
            }
          )

        }}
      >
        {/* Progress Bar Slider Rail */}
        <div className="relative w-full h-[2px] transition-[width,height,left,right,top,bottom] bg-[hsla(0,0%,50.2%,.18)] rounded-[15px]">
          {/* React Slider Process
            * Change Progcess w-[23%]
          */}
          <div
            className="h-[2px] top-0 left-[0%] transition-[width,left] duration-[0s] absolute z-[1] bg-[#335eea] rounded-[15px]"
            style={{
              width: `${cd}%`
            }}
            ref={progressRef}
          ></div>
          {/* End React Slider Process  */}

          {/* React Slider Dot
            * Change Progcess left-[23%]
          */}
          <div
            className="absolute z-[5] w-3 h-3 top-[50%] translate-x-[-50%] translate-y-[-50%] transition-[left]"
            style={{
              // left: `${cd}%`
            }}
          >
            {/* Dot Handle */}
            <div
              className={"cursor-pointer w-full h-full rounded-full bg-[#fff] box-border " +
                (isActiveProgressDotHover ? "visible": "invisible")
              }
              onMouseOver={() => handleActiveProgressTooltipHover(true)}
              onMouseOut={() => handleActiveProgressTooltipHover(false)}
            >
            </div>
            {/* End Dot Handle */}

            {/* Dot Tooltip */}
            <div className={"top-[-10px] left-[50%] translate-x-[-50%] translate-y-[-100%] absolute " +(isActiveProgressTooltipHover ? "visible" : "invisible")}>
              <div className="text-sm font-medium whitespace-nowrap px-[6px] py-[2px] min-w-[20px] text-center text-[#000] rounded-[5px] bg-[#fff] box-content">
                <span>{formatTime(c)}</span>
              </div>
            </div>
            {/* End Dot Tooltip */}
          </div>
          {/* End React Slider Dot */}
        </div>
        {/* End Progress Bar Slider Rail */}
      </div>
      {/* End Progress Bar Slider */}
    </div>
    // End Progress Bar
  )
}

export default ProgressBar
