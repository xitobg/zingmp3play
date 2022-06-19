export interface navLinksProps {
  toLink?: string
  titleLink: string
}

export interface SvgProps {
  setColor: string
  setWidth: string
  setHeight: string
}

export interface coverProps {
  title: string
  sortDescription?: string
  thumbnail: string
  link: string
}

export interface detailPlaylistInfoProps {
  thumbnailM: string
  title: string
  artists: Array<object>
  total: string
  description: string
  like: number
  contentLastUpdate: number
}
export interface TrackListDetailPlaylistProps {
  items: Array<object>
}