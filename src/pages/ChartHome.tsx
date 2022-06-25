import React, { useEffect, useState } from "react"
import { getCharthome } from "../api/zingchart"
import TrackPlaylist from "../components/TrackPlaylist"

const ChartHome:React.FC = () => {

  const [dataChartHome, setDataChartHome] = useState<any>()

  useEffect(() => {
    (
      async () => {
        setDataChartHome(await getCharthome())
      }
    )()
  }, [])

  return (
    <>
      <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
        <div className="mt-8">
          {
            dataChartHome &&
            <TrackPlaylist items={dataChartHome.RTChart.items}/>
          }
        </div>
      </main>
    </>
  )
}

export default ChartHome