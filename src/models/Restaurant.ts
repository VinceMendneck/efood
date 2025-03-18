export class Restaurants {
  image: string
  title: string
  infos?: string[]
  rate: number
  type: string
  description: string
  link: string
  id: number

  constructor(
    image: string,
    title: string,
    rate: number,
    type: string,
    description: string,
    link: string,
    id: number,
    infos?: string[]
  ) {
    this.title = title
    this.infos = infos
    this.rate = rate
    this.type = type
    this.description = description
    this.link = link
    this.id = id
    this.image = image
  }
}
