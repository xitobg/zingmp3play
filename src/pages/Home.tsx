import React, { useState, useEffect }  from "react"
import Cover from "../components/Cover"
import Navbar from "../components/Navbar"
import { getHomeApi } from "../api/home"

const Home: React.FC = () => {

  const [hSuggestPl, setHSuggestPl] = useState<object | any>()
  const [hAutoTheme1, setHAutoTheme1] = useState<object | any>()
  const [hXone, setHXone] = useState<object | any>()

  useEffect(() => {
    (
      async () => {
        const data = await getHomeApi()
        setHSuggestPl(data[0])
        setHAutoTheme1(data[1])
        setHXone(data[2])
      }
    )()
  }, [])


  return (
    <>
      <Navbar />
      <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
        {/* 1 */}
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

        {/* 2 */}
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

        {/* 3 */}
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
      </main>
    </>
  )
}

export default Home
