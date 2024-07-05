import React from 'react'
import { ProductI } from '../../interfaces/CategoryProducts'
import { useCart } from '../../hooks/useCart'

export default function ProductCard({ product }: { product: ProductI }) {
  const { addToCart, error, success, loading } = useCart()
  console.log(error, success, loading)
  const price: number = Number(product?.price?.toFixed(2))
  const discountPrice: number = Math.abs(Number((price / 4).toFixed(2)) - price)
  return (
    <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
      <a href="product-details.html" className="block w-full relative mb-4">
        <img src="images/products/01.png" className="w-full aspect-4/3 object-cover rounded-lg" alt="product" />
      </a>
      <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
        <div className="flex items-center justify-center flex-col gap-1">
          <a href="#" className="block w-full text-primary text-center">
            <h2 className="text-sm">{product?.name}</h2>
          </a>
          <small className="block text-xs w-full text-center">{product?.description}</small>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
        <span className="font-medium text-md">{discountPrice} SAR</span>
        <span className="font-medium text-sm line-through text-gray-300">{price} SAR</span>
      </div>
      <button type="button" onClick={addToCart({ productId: product?.id, quantity: 1 })} className="w-full bg-primary text-white p-2 text-md rounded-md">إضافة للسلة</button>
    </div>
  )
}
