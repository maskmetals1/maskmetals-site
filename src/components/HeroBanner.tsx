'use client'

import Image from 'next/image'

interface HeroBannerProps {
  image: string
  alt: string
}

export default function HeroBanner({ image, alt }: HeroBannerProps) {
  return (
    <div className="relative w-full">
      <Image
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        className="banner-image w-full h-auto"
        priority
        quality={100}
        unoptimized={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
    </div>
  )
}
