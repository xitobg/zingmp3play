import React, { createContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toogle } from "../../redux/navSlice"
import { rootState } from "../../utils/types"

let setWH = {
  width: 0,
  height: 0
}

const setContextMenu = createContext(setWH)

const NavAvatar: React.FC = () => {

  // get value redux toogleContextMenu
  const isActive = useSelector((state: rootState) => {
    return state.toogleContextMenu.isActive
  })
  const dispatch = useDispatch()

  // set value redux
  const handleToogleContextMenu = (e: any) => {
    // set value useContext
    setWH.width = e.clientX
    setWH.height = e.clientY
    // action toggle
    dispatch(toogle(!isActive))
  }

	return (
    <setContextMenu.Provider
      value={setWH}
    >
      <img
        src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg"
        alt="avatar"
        className="
          h-[30px]
          ml-3
          rounded-full
          cursor-pointer
          hover:brightness-[80%]
        "
        onClick={handleToogleContextMenu}
      />
    </setContextMenu.Provider>
	)
}

export default NavAvatar
export { setContextMenu }
