import React from "react"
import { Link } from "react-router-dom"
import { detailPlaylistInfoProps } from "../utils/types"

const PlaylistInfo:React.FC<detailPlaylistInfoProps> = ({ thumbnailM, title, artists, total, description }) => {
  return (
    <div className="flex">
      {/* Thumbnail */}
      <div className="relative min-w-[288px] min-h-[288px]">
        <img
          className="rounded-xl w-full h-full"
          src={thumbnailM}
          alt=""
        />
        {/* Image Blur */}
        <div
          className="
            absolute
            top-3
            w-full
            h-full
            z-[-1]
            bg-cover
            rounded-xl
            blur-md
            scale-95
          "
          style={{
            backgroundImage: `url(${thumbnailM})`
          }}
        >
        </div>
        {/* End Image Blur */}
      </div>
      {/* End Thumbnail */}
      <div className="flex flex-col justify-center ml-14">
          {/* Title */}
          <div className="text-4xl font-bold text-[color:var(--color-text)]">{title}</div>
          {/* End Title */}

          {/* List Artists Playlist */}
          <div className="text-lg opacity-90 text-[color:var(--color-text)] mt-6">
            Playlist by
            <span> </span>
            {
              artists.map((e:any, i:any) => {
                return (
                  <>
                    {
                      (i > 0) ? (<span>, </span>) : ("")
                    }
                    <Link
                      className="hover:underline opacity-100 font-medium"
                      to={`/artist/${e.alias}`}
                    >
                      {e.name}
                    </Link>
                  </>
                )
              })
            }
          </div>
          {/* End List Artists Playlist */}

          {/* Total Song */}
          <div className="text-sm opacity-70 font-medium text-[color:var(--color-text)] mt-[2px]">
            {total} Songs
          </div>
          {/* End Total Song */}

          {/* Description */}
          <div
            className="text-sm opacity-70 font-medium text-[color:var(--color-text)] mt-6"
            style={{
              maxWidth: "100%",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}

          >
            {description}
          </div>
          {/* End Description */}
          {/* Button */}
          <div className="flex">

          </div>
          {/* End Button */}
      </div>
    </div>
  )
}

export default PlaylistInfo
