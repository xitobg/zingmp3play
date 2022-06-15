import React, { useState, useEffect }  from "react"
import Cover from "../components/Cover"
import Navbar from "../components/Navbar"
import axios from "axios"

const Home: React.FC = () => {

  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])
  const [data5, setData5] = useState([])
  useEffect(() => {
    const getData = async () => {
      const a = await axios.get("http://localhost:3000/api/home?page=1")
      setData3(a.data.data.items[3].items)
      setData4(a.data.data.items[4].items)
      setData5(a.data.data.items[5].items)
    }
    getData()
  }, [])


  const d3 = data3.map((e: any) => {
    return <Cover title={e.title} link="/song" sortDescription={e.sortDescription} thumbnail={e.thumbnail}/>
  })

  const d4 = data4.map((e: any) => {
    return <Cover title={e.title} link="/song" sortDescription={e.sortDescription} thumbnail={e.thumbnail}/>
  })

  const d5 = data5.map((e: any) => {
    return <Cover title={e.title} link="/song" sortDescription={e.sortDescription} thumbnail={e.thumbnail}/>
  })
  return (
    <>
      <Navbar />
      <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
        <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
          {d3}
        </div>
        <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
          {d4}
        </div>
        <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
          {d5}
        </div>
      </main>
    </>
  )
}

export default Home
