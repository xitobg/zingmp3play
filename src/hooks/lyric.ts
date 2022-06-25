import { useEffect, useState } from "react"
import { getLyric } from "../api/lyric"

const useLyric = ( songId:string | null): any => {

  const [lyr, setLyr] = useState<Array<{ data: string }>>()

  useEffect(() => {
    (
      async () => {
        if(songId !== null && songId !== "") {

          const dataLyric:any = await getLyric(songId)

          let customLyr:Array<{ data: string }> = []

          dataLyric.sentences &&
          dataLyric.sentences.forEach((e:any, i:any) => {
            let lineLyric:string = ""

            e.words.forEach((element:any, index:any) => {
              lineLyric = lineLyric + element.data + " "
            })
            customLyr = customLyr.concat({
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
