import React from "react"
import IconPlay from "../Icons/Play"

const Cover: React.FC = () => {
  return (
    <div className="cover__item">
      <div className="cover__item--container relative">
        <div
          className="
            cover__button--play
            w-[22%]
            h-[22%]
            flex items-center
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
        <img className="rounded-xl w-[100%]" src="https://p2.music.126.net/GvYQoflE99eoeGi9jG4Bsw==/109951165375336156.jpg?param=512y512"/>

      </div>
      <div className="cover__item--text">

      </div>
    </div>
  )
}

export default Cover