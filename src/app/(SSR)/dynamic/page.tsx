import { Alert } from '@/components/bootstrap'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Dynamic Fetching - NextJS 13.4 Image Gallery',
}

export const revalidate = 0

export default async function Page() {
  const response = await fetch(
    'https://api.unsplash.com/photos/random?client_id=' +
      process.env.UNSPLASH_ACCESS_KEY,
    {
      // cache: 'no-cache',
      // This is the default, but I'm including it here to show that it's
      // possible to set the cache-control header to something else.
    }
  )

  const image: UnsplashImage = await response.json()

  const width = Math.min(500, image.width)
  const height = Math.min(width / image.width) * image.height

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
      This page <strong>is being dynamically rendered every refresh.</strong>{' '}
        This works by adding a revalidate variable and setting it to 0
        
      </Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />
      by <Link href={'/user/' + image.user.username}>{image.user.name}</Link>
    </div>
  )
}
