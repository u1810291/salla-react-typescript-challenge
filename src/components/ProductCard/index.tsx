import React from 'react'

export default function ProductCard() {
  return (
    <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
      <a href="product-details.html" className="block w-full relative mb-4">
        <img src="images/products/01.png" className="w-full aspect-4/3 object-cover rounded-lg" alt="product" />
      </a>
      <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
        <div className="flex items-center justify-center flex-col gap-1">
          <a href="#" className="block w-full text-primary text-center">
            <h2 className="text-sm">سماعات apple AirPods Max  الاصدار الجديد</h2>
          </a>
          <small className="block text-xs w-full text-center">الاصدار الاحدث و الافضل حتى اليوم</small>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-2 text-gray-300 w-full">
          <a className="text-xs text-gray-500 underline" href="#">تصنيف اول</a><a className="text-xs text-gray-500 underline" href="#">تصنيف ثاني</a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
        <span className="font-medium text-md">2,250.00 SAR</span>
        <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
      </div>
      <button type="button" className="w-full bg-primary text-white p-2 text-md rounded-md">إضافة للسلة</button>
    </div>
  )
}
