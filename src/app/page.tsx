'use client'

import React from 'react'
import Dropdown from '../components/Dropdown'
import SearchInput from '../components/SearchInput'
import ProductCard from '../components/ProductCard'
import Scroll from '../components/Spinner'
import Banner from 'src/components/Banner'

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
        <Banner />
        <div className="flex items-center justify-between gap-4 mb-4">
          <SearchInput labelText='ابحث عن منتج' onChange={()=>{}} placeholder="ادخل اسم المنتج..." />
          <Dropdown />
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
          {true ? [...Array(16).fill('').map((_, index) => (
            <ProductCard key={Math.random() * 1000 + index + 1} />
          ))] : <Scroll />}
        </div>
      </div>
    </div>
  )
}
