import React, { memo } from 'react'

type ReducePropsTypes<T> = {
  data: T
  remove: (data: T) => () => void;
  isDisabled?: boolean;
}

function Reduce<T extends { quantity?: number }>({ data, remove, isDisabled = false }: ReducePropsTypes<T>) {
  const handler = remove({ ...data, quantity: Math.max(0, (data.quantity || 0) - 1) })
  return (
    <button disabled={isDisabled} className="shrink-0 px-2 text-md text-gray-500" onClick={() => handler()}>-</button>
  )
}

export default memo(Reduce, (prev, next) => prev.isDisabled === next.isDisabled) as <T>(props: ReducePropsTypes<T>) => JSX.Element