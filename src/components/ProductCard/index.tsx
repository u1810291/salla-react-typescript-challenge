import React from 'react'
import Link from 'next/link'
import { useCart } from '../../hooks/useCart'
import { ProductI } from '../../interfaces/CategoryProducts'
import AddToCartButton from '../../components/AddToCartButton'

export default function ProductCard({ product }: { product: ProductI }) {
  const { addToCart, error, success, loading } = useCart()
  const price: number = Number(product?.price?.toFixed(2))
  const discountPrice: number = Math.abs(Number((price / 4).toFixed(2)) - price)
  return (
    <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
      <Link href={{
          pathname: `/product/${product.id}`,
          query: { data: JSON.stringify(product) }
        }}
        className="block w-full relative mb-4"
      >
        <img src="images/products/01.png" className="w-full aspect-4/3 object-cover rounded-lg" alt="product" />
      </Link>
      <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
        <div className="flex items-center justify-center flex-col gap-1">
          <Link href="#" className="block w-full text-primary text-center">
            <h2 className="text-sm">{product?.name}</h2>
          </Link>
          <small className="block text-xs w-full text-center">{product?.description}</small>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
        <span className="font-medium text-md">{discountPrice} SAR</span>
        <span className="font-medium text-sm line-through text-gray-300">{price} SAR</span>
      </div>
      <AddToCartButton product={product} addToCart={addToCart} loading={loading} />
    </div>
  )
}
