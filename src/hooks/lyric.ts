import { useEffect, useState } from "react"
import { getLyric } from "../api/lyric"

const useLyric = ( songId:string | null): any => {

  const [lyr, setLyr] = useState<Array<{ data: string; startTime: number }>>()

  useEffect(() => {
    (
      async () => {
        if(songId !== null && songId !== "") {

          const dataLyric:any = await getLyric(songId)

          let customLyr:Array<{ data: string; startTime: number }> = []

          dataLyric.sentences.forEach((e:any) => {
            let lineLyric:string = ""
            let eTime:any
            e.words.forEach((element:any, index:any) => {
              lineLyric = lineLyric + element.data + " "
              if(index === 0) {
                eTime = element.startTime
              }
            })
            customLyr = customLyr.concat({
              startTime: eTime,
              data: lineLyric
            })
          })

          setLyr(customLyr)

        }
      }
    )()
  }, [songId])

  return lyr

}

export default useLyric
