import React from 'react'

type ReducePropsTypes<T> = {
  data: T
  remove: (data: T) => () => void;
}

export default function Reduce<T extends { quantity?: number }>({ data, remove }: ReducePropsTypes<T>) {
  const handler = remove({ ...data, quantity: Math.abs((data.quantity || 0) - 1) })
  return (
    <button className="shrink-0 px-2 text-md text-gray-500" onClick={() => handler()}>-</button>
  )
}
