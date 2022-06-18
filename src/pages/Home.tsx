import React, { useState, useEffect }  from "react"
import Cover from "../components/Cover"
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
        {/* playlist */}
        <div className="index__row mt-8">
          {
            hSuggestPl &&
            hSuggestPl.map((e: any) => (
              (e.sectionType === "playlist") ? (
                <>
                  <div
                    key={e.sectionId}
                    className="
                      cover__title
                      flex
                      justify-between
                      items-end
                      text-[28px]
                      font-bold
                      text-[color:var(--color-text)]
                      mt-6
                      mb-3
                      uppercase
                  ">
                    {(e.title == "") ? (e.sectionId.slice(1)) : (e.title)}
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
                      e.items.map((element:any) => (
                        <Cover
                          key={element.encodeId}
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
                  {/* artist */}
                  <div
                    key={e.sectionId}
                    className="
                      cover__title
                      flex
                      justify-between
                      items-end
                      text-[28px]
                      font-bold
                      text-[color:var(--color-text)]
                      mb-5
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
                      e.items.map((element:any) => (
                        <ArtistCover
                          key={element.alias}
                          title={element.name}
                          link={`/artist/${element.alias}`}
                          thumbnail={element.thumbnail}
                        />
                      ))
                    }
                  </div>
                  {/* end artist */}
                </>
              )
            ))
          }
        </div>
        {/* end playlist */}
      </main>
    </>
  )
}

export default Home
