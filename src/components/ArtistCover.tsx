import React, { useState } from "react"
import { Link } from "react-router-dom"
import { coverProps } from "../utils/types"

const ArtistCover: React.FC<coverProps> = ({ title, thumbnail, link }) => {

  const [isCoverHover, setCoverHover] = useState(false)

  return (
    <div>
      <div className="relative">
        {/* Thumbnail */}
        <Link to={link}>
          <img
            className="rounded-full w-[100%] cursor-pointer"
            src={thumbnail}
            alt={title}
            onMouseOver = {() => {
              setCoverHover(true)
            }}
            onMouseOut = {() => {
              setCoverHover(false)
            }}
          />
        </Link>
        {/* End Thumbnail */}
        {/* Image Blur */}
        <div
          className={`
            absolute
            top-3
            w-full
            h-full
            z-[-1]
            bg-cover
            rounded-full
            blur-lg
            scale-95
            transition-opacity
            duration-300
            ${(isCoverHover === false ? "opacity-0" : "opacity-100")}
          `}
          style={{
            backgroundImage: `url(${thumbnail})`
          }}>
        </div>
        {/* End Image Blur */}
      </div>
      {/* Name Artist */}
      <div
        className="
          text-base
          font-semibold
          text-center
          text-[color:var(--color-text)]
          truncate
          hover:underline
          mt-2
        ">
        <Link to={link}>
          {title}
        </Link>
      </div>
      {/* End Name Artist */}
    </div>
  )
}

export default ArtistCover
