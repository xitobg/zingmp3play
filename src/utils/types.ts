interface contextMenu {
  isActive: boolean
}

export interface coverProps {
  title: string
  sortDescription?: string
  thumbnail: string
  link: string
}

export interface rootState {
  toogleContextMenu: contextMenu
}
