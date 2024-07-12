import React from 'react'
import Image from 'next/image'
import AddButton from '../Add'
import ReduceButton from '../Reduce'
import DeleteButton from '../Delete'
import { ItemsI, UpdateCartI } from '../../../interfaces/Cart'

export type ItemProps = {
  item: ItemsI;
  currency: string;
  deleteCartItem: (id: number) => () => void;
  updateCartItem: (data: UpdateCartI) => () => void;
}

export default function Item({ item, currency, deleteCartItem, updateCartItem }: ItemProps) {
  return (
    <div className="flex items-start ms:items-center flex-col sm:flex-row justify-between gap-4 w-full p-4 rounded-md transition-all hover:bg-grayer-100">
      <a href="product-details.html" className="flex items-start justify-center gap-2 flex-1">
        <Image
          className="rounded-md w-[35px] object-cover shrink-0 overflow-hidden"
          src={item.product?.imageURL}
          alt={item.product?.name}
          width={100}
          height={100}
          unoptimized={true}
        />
        <div className="flex flex-col flex-1 gap-1">
          <h4>{item.product?.name}</h4>
          <div className="flex items-center justify-start gap-2">
            <b className="ltr">x {item.quantity}</b><span className="text-xs text-gray-500">{item.product?.price + ' ' + currency}</span>
          </div>
        </div>
      </a>
      <div className="flex items-center justify-center gap-4">
        <div className="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg">
          <AddButton <UpdateCartI> add={updateCartItem} data={{
              id: item.id,
              productId: item.product?.id,
              quantity: item.quantity
            }}
          />
          <input onChange={(e)=> {}} type="number" value={item.quantity} className="w-[50px] flex-1 text-center appearance-none bg-transparent" />
          <ReduceButton
            <UpdateCartI>
            remove={updateCartItem}
            data={{
              id: item.id,
              productId: item.product?.id,
              quantity: item.quantity  
            }}
          />
        </div>
        <DeleteButton
          delete={deleteCartItem}
          id={item.id}
        />
      </div>
    </div>
  )
}
