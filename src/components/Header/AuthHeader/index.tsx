"use client"
import React from 'react'
import Link from 'next/link'
import LogoImage from '../../../components/LogoImage'

export default function AuthHeader() {
  return (
    <div className="container mx-auto">
      <div className="md:py-6 py-4">
        <div className="flex justify-center flex-col sm:flex-row gap-4 items-center">
          <div className="flex flex-col items-center gap-4 relative">
            <Link
              href="/"
              className="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50"
            >
              <LogoImage />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="text-xl text-center">متجر التجربة الجميلة</h1>
              <small className="text-gray-400 text-center">متجرك لكل تجاربك وأفكارك الجميلة</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
