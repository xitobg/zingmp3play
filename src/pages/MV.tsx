import React, { useEffect, useState } from "react"
import ListMV from "../components/ListMV"
import { getlistMV } from "../api/mv"
import Loading from "../components/Loading"

const MV:React.FC = () => {

  const [dataListMV, setDataListMV] = useState<[]>()

  useEffect(() => {
    (
      async () => {
        const data: {items: []} = await getlistMV(1, 1, 500)
        setDataListMV(data.items)
      }
    )()
  }, [])

  return (
    <div className="pt-[65px] pb-[96px] px-[10vw]">
      {
        dataListMV
        ?
        <div className="grid grid-cols-5 gap-x-6 gap-y-10">
        {
          dataListMV &&
          dataListMV.map((e: {encodeId: string, title: string, thumbnail: string, artists: []}, i) => {
            return (
              <ListMV key={i} encodeId={e.encodeId} title={e.title} thumbnail={e.thumbnail} artists={e.artists} />
            )
          })
        }
        </div>
        :
        <Loading />
      }
    </div>
  )
}

export default MV
