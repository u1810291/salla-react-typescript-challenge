
import React from 'react'
import { CategoryI } from '../../interfaces/CategoryProducts'
import Spinner from '../Spinner';

export default function Dropdown({
  categories,
  setCategory,
  loading
}: {
  categories: CategoryI[];
  setCategory: (event) => void;
  loading: boolean
}) {
  return (
    <div className='flex flex-col gap-1 shrink-0 sm:min-w-[180px]'>
      <label className='hidden'>اختر تصنيف</label>
        {!loading ? 
          <select
            defaultValue={1}
            onChange={(e) => setCategory(Number(e?.target?.value))}
            className='bg-white border text-md rounded-md focus:ring-secondary-50 focus:border-secondary-50 block w-full px-2 py-1'>
            {categories?.map((category: CategoryI) => (
              <option
                key={`${category?.id}-${category?.categoryName}`}
                value={category?.id}
              >
                {category?.categoryName || category?.id}
              </option>
            ))}
          </select>
        : <Spinner />}
    </div>
  )
}
