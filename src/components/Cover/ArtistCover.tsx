import React, { useState } from "react"
import { Link } from "react-router-dom"
import IconPlay from "../Icons/Play"
import { coverProps } from "../../utils/types"

const ArtistCover: React.FC<coverProps> = ({ title, sortDescription, thumbnail, link }) => {

  const [isCoverHover, setCoverHover] = useState(false)

  return (
    <div
      className="cover__item"
    >
      <div className="cover__item--container relative">

        {/* Button Icon Play */}
        <Link to={link}>
          <div
            className={`
              cover__button--play
              ${(isCoverHover === false ? "opacity-0" : "opacity-100")}
            `}
            onMouseOver = {() => {
              setCoverHover(true)
            }}
            onMouseOut = {() => {
              setCoverHover(false)
            }}
          >
            <div
              className="
                w-[22%]
                h-[22%]
                flex
                items-center
                justify-center
                bg-[hsla(0,0%,100%,.14)]
                hover:bg-[hsla(0,0%,100%,.4)]
                rounded-full
                pl-1
                border
                border-solid
                border-[hsla(0,0%,100%,.08)]
                cursor-pointer
                backdrop-blur
                absolute
                top-1/2
                left-1/2
                translate-x-[-50%]
                translate-y-[-50%]
                transition-all
                duration-300
              "
            >
              <IconPlay setColor="var(--color-text)" setWidth="15px" setHeight="15px"/>
            </div>
          </div>
        </Link>

        {/* Thumbnail */}
        <Link to={link}>
          <img
            className="rounded-full w-[100%] cursor-pointer"
            src={thumbnail}
            alt=""
            onMouseOver = {() => {
              setCoverHover(true)
            }}
            onMouseOut = {() => {
              setCoverHover(false)
            }}
          />
        </Link>

        {/* Img Blur */}
        <div
          className={`
            absolute
            top-4
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
      </div>
      <div className="cover__item--text">
        <div
          className="
            cover__title
            text-base
            font-semibold
            text-[color:var(--color-text)]
            truncate
            text-center
          ">
          <Link to={link}>{title}</Link>
        </div>
        <div
          className="
            cover__info
            text-xs
            text-[color:var(--color-text)]
            opacity-60
          "
          style={{
            maxWidth: "100%",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          >
          <span>{sortDescription}</span>
        </div>
      </div>
    </div>
  )
}

export default ArtistCover
