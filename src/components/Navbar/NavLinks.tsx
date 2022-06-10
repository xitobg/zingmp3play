import React from "react"
import { Link } from "react-router-dom"

interface LinkProps {
  toLink?: string
  titleLink: string
}

const NavLinks: React.FunctionComponent<LinkProps> = ({ toLink, titleLink })=> {
  return (
    <div className="items-center">
      <Link
        to={toLink || ""}
        className="
          text-[color:var(--color-text)]
          text-lg
          font-bold
          py-1.5
          px-2.5
          mx-3
          hover:bg-[color:var(--color-secondary-bg-for-transparent)]
          rounded-md
          uppercase
          hover:duration-200
        "
      >
        {titleLink}
      </Link>
    </div>
  )
}

export default NavLinks
