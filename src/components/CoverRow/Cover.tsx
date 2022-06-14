import React, { useState } from "react"
import IconPlay from "../Icons/Play"

const Cover: React.FC = () => {

  const [isCoverHover, setCoverHover] = useState(false)

  return (
    <div
      className="cover__item"
    >
      <div className="cover__item--container relative">
        <div
          className={`
            cover__button--play
            ${(isCoverHover == false ? "hidden" : "block")}
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
            "
          >
            <button>
              <IconPlay setColor="var(--color-text)" setWidth="15px" setHeight="15px"/>
            </button>
          </div>
        </div>
        <img
          className="rounded-xl w-[100%]"
          src="https://p2.music.126.net/GvYQoflE99eoeGi9jG4Bsw==/109951165375336156.jpg?param=512y512"
          alt=""
          onMouseOver = {() => {
            setCoverHover(true)
          }}
          onMouseOut = {() => {
            setCoverHover(false)
          }}
        />
        <div
          className={`
            absolute
            top-3
            w-full
            h-full
            z-[-1]
            bg-cover
            rounded-xl
            blur-lg
            opacity-60
            duration-1000
            ${(isCoverHover === false ? "hidden" : "")}
          `}
          style={{
            backgroundImage: `url(https://p2.music.126.net/GvYQoflE99eoeGi9jG4Bsw==/109951165375336156.jpg?param=512y512)`
          }}>
        </div>
      </div>
      <div className="cover__item--text">

      </div>
    </div>
  )
}

export default Cover