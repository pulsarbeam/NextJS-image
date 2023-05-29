type UnsplashImage = {
  description: string
  user: {
    username: string
    name: string
  }
  urls: {
    raw: string
  }
  width: number
  height: number
}

type UnsplashUser = {
  username: string
  first_name: string
  last_name: string
}

type UnsplashSearchResults = {
  results: UnsplashImage[]
}
