import React from "react"
import { Link } from "react-router-dom"
import { navLinksProps } from "../../utils/types"

const NavLinks: React.FC<navLinksProps> = ({ toLink, titleLink })=> {
  return (
    <Link
      to={toLink || ""}
      className="text-[color:var(--color-text)] text-lg font-bold py-1.5 px-2.5 mx-3 hover:bg-[color:var(--color-secondary-bg-for-transparent)] rounded-md uppercase hover:duration-200"
    >
      {titleLink}
    </Link>
  )
}

export default NavLinks
