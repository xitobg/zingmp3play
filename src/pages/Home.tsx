import React, { useState, useEffect }  from "react"
import Cover from "../components/Cover"
import ArtistCover from "../components/Cover/ArtistCover"
import Navbar from "../components/Navbar"
import { getHomeApiPlayList, getHomeApiArtist } from "../api/home"

const Home: React.FC = () => {

  const [hSuggestPl, setHSuggestPl] = useState<object | any>()
  const [hAutoTheme1, setHAutoTheme1] = useState<object | any>()
  const [hXone, setHXone] = useState<object | any>()
  const [hAutoTheme2, setHAutoTheme2] = useState<object | any>()
  const [top100, setTop100] = useState<object | any>()
  const [artist, setArtist] = useState<object | any>()

  useEffect(() => {
    (
      async () => {
        let dataHomePlayList:Array<object> = []
        await Promise.all([
          getHomeApiPlayList(1),
          getHomeApiPlayList(2),
          getHomeApiPlayList(3),
        ]).then((values) => {
          dataHomePlayList = dataHomePlayList.concat(values[0], values[1], values[2])
        })
        setHSuggestPl(dataHomePlayList[0])
        setHAutoTheme1(dataHomePlayList[1])
        setHXone(dataHomePlayList[2])
        setHAutoTheme2(dataHomePlayList[3])
        setTop100(dataHomePlayList[4])

        // get Artist
        let dataHomeArtist:Array<object> = []
        dataHomeArtist = await getHomeApiArtist(3)
        setArtist(dataHomeArtist[0])
      }
    )()
  }, [])


  return (
    <>
      <Navbar />
      <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
        {/* Có Thể Bạn Muốn Nghe */}
        <div className="index__row mt-8">
          {
            (hSuggestPl === undefined) ? ("") : (<div className="cover__title flex justify-between items-end text-[28px] font-bold text-[color:var(--color-text)] mb-5">
              {hSuggestPl.title}
            </div>)
          }
          <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
            {
              (hSuggestPl === undefined) ? ("") : (
                hSuggestPl.items.map((e:any, i:any) => {
                  return <Cover key={i} title={e.title} link={`/playlist/${e.encodeId}`} thumbnail={e.thumbnail} sortDescription={e.sortDescription} />
                })
              )
            }
          </div>
        </div>

        {/* Lựa chọn hôm nay */}
        <div className="index__row mt-8">
          {
            (hAutoTheme1 === undefined) ? ("") : (<div className="cover__title flex justify-between items-end text-[28px] font-bold text-[color:var(--color-text)] mb-5">
              {hAutoTheme1.title}
            </div>)
          }
          <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
            {
              (hAutoTheme1 === undefined) ? ("") : (
                hAutoTheme1.items.map((e:any, i:any) => {
                  return <Cover key={i} title={e.title} link={`/playlist/${e.encodeId}`} thumbnail={e.thumbnail} sortDescription={e.sortDescription} />
                })
              )
            }
          </div>
        </div>

        {/* XONE's CORNER */}
        <div className="index__row mt-8">
          {
            (hXone === undefined) ? ("") : (<div className="cover__title flex justify-between items-end text-[28px] font-bold text-[color:var(--color-text)] mb-5">
              {hXone.title}
            </div>)
          }
          <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
            {
              (hXone === undefined) ? ("") : (
                hXone.items.map((e:any, i:any) => {
                  return <Cover key={i} title={e.title} link={`/playlist/${e.encodeId}`} thumbnail={e.thumbnail} sortDescription={e.sortDescription} />
                })
              )
            }
          </div>
        </div>

        {/* Nhạc mới mỗi ngày */}
        <div className="index__row mt-8">
          {
            (hAutoTheme2 === undefined) ? ("") : (<div className="cover__title flex justify-between items-end text-[28px] font-bold text-[color:var(--color-text)] mb-5">
              {hAutoTheme2.title}
            </div>)
          }
          <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
            {
              (hAutoTheme2 === undefined) ? ("") : (
                hAutoTheme2.items.map((e:any, i:any) => {
                  return <Cover key={i} title={e.title} link={`/playlist/${e.encodeId}`} thumbnail={e.thumbnail} sortDescription={e.sortDescription} />
                })
              )
            }
          </div>
        </div>

        {/* Artist */}
        <div className="index__row mt-8">
          {
            (artist === undefined) ? ("") : (<div className="cover__title flex justify-between items-end text-[28px] font-bold text-[color:var(--color-text)] mb-5 uppercase">
              {artist.sectionType}
            </div>)
          }
          <div className="cover__row grid grid-cols-6 gap-x-6 gap-y-11">
            {
              (artist === undefined) ? ("") : (
                artist.items.map((e:any, i:any) => {
                  return <ArtistCover key={i} title={e.name} link={`/artist/${e.alias}`} thumbnail={e.thumbnail} sortDescription=""/>
                })
              )
            }
          </div>
        </div>

        {/* Top100 */}
        <div className="index__row mt-8">
          {
            (top100 === undefined) ? ("") : (<div className="cover__title flex justify-between items-end text-[28px] font-bold text-[color:var(--color-text)] mb-5">
              {top100.title}
            </div>)
          }
          <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
            {
              (top100 === undefined) ? ("") : (
                top100.items.map((e:any, i:any) => {
                  return <Cover key={i} title={e.title} link={`/playlist/${e.encodeId}`} thumbnail={e.thumbnail} sortDescription={e.sortDescription} />
                })
              )
            }
          </div>
        </div>

      </main>
    </>
  )
}

export default Home
