import React, { useState, useEffect }  from "react"
import PlaylistCover from "../components/Cover/PlaylistCover"
import ArtistCover from "../components/Cover/ArtistCover"
import Navbar from "../components/Navbar"
import { getHomeApiPlayList } from "../api/home"

const Home: React.FC = () => {

  const [hSuggestPl, setHSuggestPl] = useState<Array<object>>([])

  useEffect(() => {
    (
      async () => {
        await Promise.all([
          getHomeApiPlayList(1),
          getHomeApiPlayList(2),
          getHomeApiPlayList(3),
          getHomeApiPlayList(4),
          getHomeApiPlayList(5),
        ]).then((values) => {
          setHSuggestPl([].concat(...values))
        })
      }
    )()
  }, [])

  return (
    <>
      {/* {console.log(hSuggestPl)} */}
      <Navbar />
      <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
        {/* Playlist */}
        <div className="index__row mt-8">
          {
            hSuggestPl &&
            hSuggestPl.map((e: any, i: any) => (
              (e.sectionType === "playlist") ? (
                <>
                  <div
                    key={i}
                    className="
                      cover__title
                      flex
                      justify-between
                      items-end
                      text-[28px]
                      font-bold
                      text-[color:var(--color-text)]
                      mt-9
                      mb-3
                      uppercase
                  ">
                    {(e.title === "") ? (e.sectionId.slice(1)) : (e.title)}
                  </div>
                  <div
                    className="
                      cover__row
                      grid
                      grid-cols-5
                      gap-x-6
                      gap-y-11
                  ">
                    {
                      e.items.map((element:any, index: any) => (
                        <PlaylistCover
                          key={index}
                          title={element.title}
                          link={`/playlist/${element.encodeId}`}
                          thumbnail={element.thumbnail}
                          sortDescription={element.sortDescription}
                        />
                      ))
                    }
                  </div>
                </>
              ) : (
                <>
                  {/* Artist */}
                  <div
                    key={i}
                    className="
                      cover__title
                      flex
                      justify-between
                      items-end
                      text-[28px]
                      font-bold
                      text-[color:var(--color-text)]
                      mt-9
                      mb-3
                      uppercase
                  ">
                    {e.sectionType}
                  </div>
                  <div
                    className="
                      cover__row
                      grid
                      grid-cols-6
                      gap-x-6
                      gap-y-11
                  ">
                    {
                      e.items.map((element:any, index: any) => (
                        <ArtistCover
                          key={index}
                          title={element.name}
                          link={`/artist/${element.alias}`}
                          thumbnail={element.thumbnail}
                        />
                      ))
                    }
                  </div>
                  {/* End Artist */}
                </>
              )
            ))
          }
        </div>
        {/* End Playlist */}
      </main>
    </>
  )
}

export default Home
