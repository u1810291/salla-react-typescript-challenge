'use client'
import Image from 'next/image'
import Add from 'src/components/Cart/Add'
import Reduce from 'src/components/Cart/Reduce'
import { useCart } from '../../../hooks/useCart'
import { ProductI } from 'src/interfaces/CategoryProducts'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import AddToCartButton from 'src/components/AddToCartButton'
import { CartItemsI, UpdateCartI } from 'src/interfaces/Cart'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Detail() {
  const query = usePathname()
  const id = useMemo(() => Number(query.split('/').find((el) => Number(el))), [])
  const searchParams = useSearchParams()
  const { addToCart, success, loading, updateCartData, fetchCartData } = useCart()
  const cartItem = useMemo(() => success?.cartItems?.find((el) => el?.product?.id === id), [success, loading])
  const product: ProductI = useMemo(() => cartItem?.product || JSON.parse(searchParams.getAll('data')[0]), [success])
  const [quantity, setQuantity] = useState<number>(cartItem?.quantity || 0)

  useEffect(() => {
    fetchCartData()
  }, [addToCart])

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem?.quantity)
    }
  }, [loading, cartItem])

  return (
    <main className='w-full main flex-auto'>
      <div className='container'>
        <div className='p-2 sm:p-4 bg-white rounded-lg shadow-4xl'>
          <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-4'>
            <Image
              src='/images/products/01.png'
              className='w-full aspect-4/3 object-cover rounded-lg mb-8 sm:mb-0'
              alt='product img'
              width={100}
              height={100}
            />
            <div className='flex flex-col gap-4 col-span-2'>
              <article className='text-sm text-darker-300 leading-[1.8] '>
                <div className='flx flex-col mb-6 gap-2'>
                  <h1 className='text-xl md:text-3xl'>{product?.name}</h1>
                  <small className='text-xs text-gray-500'>الاصدار الاحدث و الافضل حتى اليوم</small>
                </div>
                <div className='flex flex-col sm:flex-row w-full my-4 gap-0 sm:gap-2'>
                  <span className='font-medium text-md'>{product.price} SAR</span>
                  <span className='font-medium text-sm line-through text-gray-300'>{product.price} SAR</span>
                </div>
                <p>{product.description}</p>
              </article>
              <div className='flex items-center justify-center gap-4'>
                <div className='flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg'>
                  <Add
                    <UpdateCartI>
                    isDisabled={!Boolean(quantity)}
                    add={updateCartData}
                    data={{
                      id: cartItem?.id || NaN,
                      productId: cartItem?.product?.id || product.id,
                      quantity: cartItem?.quantity
                    }}
                  />
                  <input
                    type='number'
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e?.target?.value))}
                    className='w-[50px] flex-1 text-center appearance-none bg-transparent'
                    />
                  <Reduce
                    <UpdateCartI>
                    isDisabled={!Boolean(quantity)}
                    remove={updateCartData}
                    data={{
                      id: cartItem?.id || NaN,
                      productId: cartItem?.product?.id || product.id,
                      quantity: cartItem?.quantity
                    }}
                  />
                </div>
                <AddToCartButton addToCart={addToCart} product={product} loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
