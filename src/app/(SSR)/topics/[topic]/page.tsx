import Image from 'next/image'
import styles from './Topic.module.css'
import { Alert } from '@/components/bootstrap'

//export const dynamicParams = false

interface PageProps {
  params: {
    topic: string
  }
}

export function generateMetadata({ params: { topic } }: PageProps) {
  return {
    title: `${topic} - NextJS 13.4 Image Gallery`,
  }
}

export function generateStaticParams() {
  return ['cats', 'dogs', 'birds'].map((topic) => ({
    topic,
  }))
}

export default async function Page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=5&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  )

  const images: UnsplashImage[] = await response.json()
  console.log(response)
  return (
    <div>
      <Alert>
        This page uses <strong>generateStaticParams</strong> to render and cache
        static pages at build time, even though the URL has a dynamic parameter.
        Pages that are not included in generate static params will be fetched &
        rendered on first access and then cached for subsequent request (this
        can be disabled){' '}
      </Alert>
      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          src={image.urls.raw}
          width={250}
          height={250}
          alt={image.description}
          key={image.urls.raw}
          className={styles.image}
        />
      ))}
    </div>
  )
}
