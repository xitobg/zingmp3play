import React from "react"
import { useSelector } from "react-redux"


const NavAvatar: React.FC = () => {
  useSelector((state) => {
    console.log(state)
  })
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
    />
	)
}

export default NavAvatar
