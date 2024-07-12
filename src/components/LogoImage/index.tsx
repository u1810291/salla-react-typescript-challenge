'use client'
import React from 'react'
import Image from 'next/image'

type LogoImageProps = {
  width?: number;
  height?: number;
}

export default function LogoImage({ width, height }: LogoImageProps) {
  return (
    <Image
      src="/images/logo-square.webp"
      alt="Logo"
      width={width || 100}
      height={height || 100}
      unoptimized
    />
  )
}
