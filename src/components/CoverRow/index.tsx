import React from "react"
import Cover from "./Cover"

const CoverRow: React.FC = () => {
  return (
    <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
      <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
        <Cover title="Top 100 Bài Hát Nhạc Trẻ Hay Nhất" thumbnail="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/c/f/7/6/cf76de6283cfa98ec85a301addb676e5.jpg" sortDescription="Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục." />

      <Cover title="Top 100 Pop Âu Mỹ Hay Nhất" thumbnail="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg" sortDescription="Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Pop Âu Mỹ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục."/>
      </div>

    </main>
  )
}

export default CoverRow
