'use client'
import React from 'react'
import Link from 'next/link'
import LogoImage from '../../../components/LogoImage'

export default function index() {
  return (
    <div>
        <div className="container mx-auto">
          <div className="md:py-6 py-4">
            <div className="flex justify-between flex-col sm:flex-row gap-4 items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 relative">
                <Link href="/">
                  <div className="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50">
                    <LogoImage />
                  </div>
                </Link>
                <div className="flex flex-col">
                  <h1 className="text-xl">متجر التجربة الجميلة</h1>
                  <small className="text-gray-400">متجرك لكل تجاربك وأفكارك الجميلة</small>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/auth/sign-in"
                  className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary"
                >
                  <i className="sicon-user"></i>
                </Link>
                <Link
                  href="/cart" className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary">
                  <i className="sicon-shopping-bag"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
