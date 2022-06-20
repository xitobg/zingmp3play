import React from "react"
import IconPrevious from "../Icons/Previous"
import IconPlay from "../Icons/Play"
import IconNext from "../Icons/Next"
interface controlsProps {
  thumbnail: string
  title: string
  artistsNames: string
}

const Controls:React.FC<controlsProps> = ({ thumbnail, title, artistsNames }) => {

  const styleButtons = "p-2 flex justify-center items-center bg-transparent rounded-[25%] transition-all duration-200 hover:bg-[color:var(--color-secondary-bg-for-transparent)]"

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

      {/* Middlen Controls Button */}
      <div className="flex justify-center items-center">
        <button className={"mx-2 my-0 " + styleButtons}>
          <IconPrevious setColor="white" setWidth="16px" setHeight="16px" />
        </button>
        <button className={"w-[42px] h-[42px] mx-2 my-0 " + styleButtons}>
          <IconPlay setColor="white" setWidth="24px" setHeight="24px"/>
        </button>
        <button className={"mx-2 my-0 " + styleButtons}>
          <IconNext setColor="white" setWidth="16px" setHeight="16px" />
        </button>
      </div>
      {/* End Middlen Controls Button */}

      {/* Right Controls Button */}
      <div>

      </div>
      {/* End Right Controls Button */}
    </div>
  )
}

export default Controls
