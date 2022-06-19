import React from "react"
import { TrackListDetailPlaylistProps } from "../utils/types"
import { Link } from "react-router-dom"

const TrackListDetailPlaylist: React.FC<TrackListDetailPlaylistProps> = ({ items }) => {
  return (
    <div>
      {
        items.map((e: any, i:any) => {
          return (
            <div className="flex items-center p-2 rounded-lg hover:bg-[color:var(--color-secondary-bg)] transition-all duration-300">
              {/* Thumbnail */}
              <img className="rounded-lg w-[46px] h-[46px] mr-5" src={e.thumbnail} alt={e.title} />
              {/* End Thumbnail */}
              {/* Title & Artist */}
              <div className="flex flex-col">
                {/* Title */}
                <div className="text-[color:var(--color-text)] text-lg font-semibold truncate">{e.title}</div>
                {/* Artist */}
                <div className="mt-[2px] text-[color:var(--color-text)] text-sm opacity-70 truncate">
                  {
                    (e.artists || []).filter((element: any) => { return element !== undefined }).map((eArtist: any, iArtist: any) => {
                      return (
                        <>
                          {
                            (iArtist > 0) ? (<span>, </span>) : ("")
                          }
                          <Link
                            className="hover:underline"
                            to={`/artist/${eArtist.alias}`}
                          >
                            {eArtist.name}
                          </Link>
                        </>
                      )
                    })
                  }
                </div>
              </div>
              {/* End Title & Artist */}
            </div>
          )
        })
      }
    </div>
  )
}

export default TrackListDetailPlaylist