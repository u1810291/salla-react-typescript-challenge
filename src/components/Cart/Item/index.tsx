import React from 'react'
import Image from 'next/image'
import AddButton from '../Add'
import ReduceButton from '../Reduce'
import DeleteButton from '../Delete'

export type ItemProps = {
  title: string;
  price: number;
  currency: string;
  count: number;
  src: string;
}

export default function Item({ title, price, currency, count, src }: ItemProps) {
  return (
    <div className="flex items-start ms:items-center flex-col sm:flex-row justify-between gap-4 w-full p-4 rounded-md transition-all hover:bg-grayer-100">
      <a href="product-details.html" className="flex items-start justify-center gap-2 flex-1">
        <Image
          className="rounded-md w-[35px] object-cover shrink-0 overflow-hidden"
          src={src}
          alt={title}
          width={100}
          height={100}
          unoptimized={true}
        />
        <div className="flex flex-col flex-1 gap-1">
          <h4>{title}</h4>
          <div className="flex items-center justify-start gap-2">
            <b className="ltr">x {count}</b><span className="text-xs text-gray-500">{price + ' ' + currency}</span>
          </div>
        </div>
      </a>
      <div className="flex items-center justify-center gap-4">
        <div className="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg">
          <AddButton />
          <input type="number" value="2" className="w-[50px] flex-1 text-center appearance-none bg-transparent" />
          <ReduceButton />
        </div>
        <DeleteButton />
      </div>
    </div>
  )
}
