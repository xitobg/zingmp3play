import React from "react"
import { coverPropsPlaylist } from "../utils/types"

const PlaylistInfo:React.FC<coverPropsPlaylist> = ({ thumbnail }) => {

  return (
    <div className="flex">
      {/* Thumbnail */}
      <img
        className="rounded-xl w-[288px] h-[288px]"
        src={thumbnail}
        alt=""
      />
      {/* End Thumbnail */}
      <div>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, pariatur? Voluptas, ipsam ducimus odio minus tempore hic necessitatibus cumque expedita quam magni officiis id quibusdam perferendis alias maiores totam magnam!</span>
      </div>
    </div>
  )
}

export default PlaylistInfo