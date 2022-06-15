import React, { useState, useEffect }  from "react"
import Cover from "../components/Cover"
import Navbar from "../components/Navbar"
import { getHomeApi } from "../api/home"

const Home: React.FC = () => {

  const [data, setData] = useState<Array<object>>([])

  useEffect(() => {
    (
      async () => {
        setData(await getHomeApi())
      }
    )()
  }, [])

  return (
    <>
      <Navbar />
      <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
        <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
          {
          }
        </div>
      </main>
    </>
  )
}

export default Home
