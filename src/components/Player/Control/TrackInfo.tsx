import React from "react"

const TrackInfo: React.FC = () => {
  return(
    <div className="flex items-center">
      {/* Thumbnail */}
      <img
        src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/8/0/7/1807c6b5fcc7058a14e1a288801221c7.jpg"
        alt=""
        className="h-[46px] rounded-[5px]"
      />
      {/* End Thumbnail */}

      {/* Info */}
      <div className="flex flex-col justify-center h-[46px] ml-3">
        <div className="font-semibold text-base text-[color:var(--color-text)] opacity-90 mb-1 truncate">Sau Lưng Anh Có Ai Kìa</div>
        <div className="text-xs opacity-60 text-[color:var(--color-text)] truncate">Thiều Bảo Trâm</div>
      </div>
      {/* End Info */}
    </div>
  )
}

export default TrackInfo