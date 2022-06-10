import React, { useState } from "react"
import IconSearch from "../../Icons/Search"

const SearchBox: React.FC = () => {

  const [ currentActive, setActive ] = useState(false)

  return (
    <div
      className={`
          flex
          items-center
          w-52
          h-8
          rounded-lg
        ` + " " +
        ( currentActive === false
            ? "bg-[color:var(--color-secondary-bg-for-transparent)]"
            : "bg-[color:var(--color-primary-bg-for-transparent)]"
        )
      }
    >
      {/* Icon Search */}
      <div className={ "ml-2 mr-1" + " " + (currentActive === false ? "opacity-25" : "") }>
        <IconSearch setColor="var(--color-text)" setWidth="15px" setHeight="15px"/>
      </div>
      {/* Input */}
      <input
        type="search"
        placeholder={ currentActive === false ? "Search" : "" }
        className={`
            text-[16px]
            text-[color:var(--color-text)]
            border-none
            bg-transparent
            font-semibold
            outline-none
            w-10/12
          ` + " " +
          (currentActive === false ? "opacity-25" : "")
        }
        onFocus={ () => { setActive(!currentActive) } }
        onBlur={ () => { setActive(!currentActive) } }
      >
      </input>
    </div>
  )
}

export default SearchBox
