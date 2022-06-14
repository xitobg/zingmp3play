import React from "react"
import Cover from "./Cover"

const CoverRow: React.FC = () => {
  return (
    <main className="inset-0 box-border pt-[64px] pb-[96px] px-[10vw]">
      <div className="cover__row grid grid-cols-5 gap-x-6 gap-y-11">
        <Cover />
        <Cover />
        <Cover />
        <Cover />
        <Cover />
        <Cover />
        <Cover />
        <Cover />
        <Cover />
        <Cover />
      </div>
    </main>
  )
}

export default CoverRow