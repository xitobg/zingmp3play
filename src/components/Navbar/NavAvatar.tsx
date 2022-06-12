import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { toogle } from "../../redux/navSlice"
import { rootState } from "../../utils/interface"

const NavAvatar: React.FC = () => {

  const isActive = useSelector((state: rootState) => {
    return state.toogleContextMenu.isActive
  })

  const dispatch = useDispatch()

  const handleToogleContextMenu = () => {
    dispatch(toogle(!isActive))
  }

	return (
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
	)
}

export default NavAvatar
