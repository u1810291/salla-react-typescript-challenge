'use client'
import React from 'react'

export default function SearchInput({ onChange = () => {}, placeholder, labelText }: { onChange: () => void; placeholder: string; labelText: string }) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <label htmlFor="product_query" className="hidden">{labelText}</label>
      <input
        type="text"
        name="product_query"
        className="w-full p-2 bg-white appearance-none rounded-md border text-md"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
