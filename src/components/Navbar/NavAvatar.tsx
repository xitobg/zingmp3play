import React, {useState} from "react"

interface handleEvenClick {
  callbackActive: (e: any, active: boolean) => void
}

const NavAvatar: React.FC<handleEvenClick> = ({ callbackActive }) => {
  const [isActive, setActive] = useState(false)
	return (
    <img
      src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60"
      alt="avatar"
      className="
        h-[30px]
        ml-3
        rounded-full
        cursor-pointer
        hover:brightness-[80%]
      "
      onClick={(e) => {
          setActive(!isActive)
          callbackActive(e, !isActive)
        }
      }
    />
	)
}

export default NavAvatar
