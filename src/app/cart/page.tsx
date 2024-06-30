import React from 'react'
import Item, { ItemProps } from '../../components/Cart/Item'
import { items } from '../../mocks/cart'

export default function Cart() {
  const totalPrice = items.reduce((acc, { price: prev }): number => acc + prev, 0)
  return (
    <main className="w-full main flex-auto">
      <div className="container mx-auto">
        <div className="p-4 bg-white rounded-lg shadow-4xl">
          <div className="flex flex-col mb-6">
            <h2 className="text-lg flex items-center justify-start gap-2">سلة المشتريات</h2>
          </div>
          <ul className="flex flex-col">
            {items.map(({ title, price, count, currency, src }: ItemProps, index) => (
              <li key={index + Math.random() * 1000} className="flex items-start ms:items-center flex-col sm:flex-row justify-between gap-4 w-full p-4 rounded-md transition-all hover:bg-grayer-100">
                <Item src={src} title={title} price={price} currency={currency} count={count} />
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between px-4 py-8 border-gray-100 border-t border-b-1">
            <h3 className="font-bold text-xl">اجمالي السلة</h3>
            <span className="text-xl font-bold">
              {totalPrice} SAR
            </span>
          </div>
          <button type="button" className="w-full bg-primary text-white p-3 text-md rounded-md">اتمام عملية الدفع</button>
        </div>
      </div>
    </main>
  )
}
