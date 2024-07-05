'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Spinner from '../components/Spinner'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import SearchInput from '../components/SearchInput'
import ProductCard from '../components/ProductCard'
import { useCategory } from '../hooks/useCategory'

export default function Home() {
  const [categoryId, setCategory] = useState<number>(1)
  const { success: categories, loading, fetchData } = useCategory()
  const products = useMemo(() => 
    categories.find((category) => category.id === categoryId)?.products,
  [categoryId, categories])
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='container mx-auto'>
      <div className='p-2 sm:p-4 bg-white rounded-lg shadow-4xl'>
        <Banner />
        <div className='flex items-center justify-between gap-4 mb-4'>
          <SearchInput labelText='ابحث عن منتج' onChange={()=>{}} placeholder='ادخل اسم المنتج...' />
          <Dropdown setCategory={setCategory} categories={categories} loading={loading} />
        </div>
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4'>
          {products?.length ? products?.map((product) => (
            <ProductCard key={`${product.id}-${product.name}`} product={product} />
          )) : (
            <div className='col-span-4'>
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}