export class Products {
  image: string
  title: string
  description: string
  id: number

  constructor(image: string, title: string, description: string, id: number) {
    this.image = image
    this.title = title
    this.description = description
    this.id = id
  }
}

export class BannerM {
  banner: string
  restaurant: string
  tag: string
  id: number

  constructor(banner: string, restaurant: string, tag: string, id: number) {
    this.banner = banner
    this.restaurant = restaurant
    this.tag = tag
    this.id = id
  }
}
