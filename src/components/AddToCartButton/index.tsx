import React, { memo } from 'react'
import Spinner from '../Spinner'
import { AddToCartI } from '../../interfaces/Cart'
import { ProductI } from '../../interfaces/CategoryProducts'

type AddToCartButtonPropTypes = {
  loading: boolean;
  product: ProductI;
  addToCart: (data: AddToCartI) => () => void;
}

function AddToCartButton({ loading, product, addToCart }: AddToCartButtonPropTypes) {
  return (
    <button
      type="button"
      onClick={addToCart({ productId: product?.id, quantity: 1 })}
      className="w-full bg-primary text-white text-md rounded-md h-[40px] flex content-center justify-center"
    >
      {loading ? <Spinner /> : <span className='p-2'>'إضافة للسلة'</span>}
    </button>
  )
}

export default memo(AddToCartButton)
