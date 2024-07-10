import React from 'react'

type AddButtonType<T> = {
  add: (data: T) => () => void;
  data: T;
}

export default function Add<T extends { quantity?: number }>({
  add,
  data
}: AddButtonType<T>) {
  const handler = add({ ...data,  quantity: (data?.quantity as number) + 1 })
  return (
    <button
      className="shrink-0 px-2 text-md text-gray-500"
      onClick={() => handler()}
    >
      +
    </button>
  )
}
