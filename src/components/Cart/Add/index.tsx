import React, { memo } from 'react'

type AddButtonType<T> = {
  add: (data: T) => () => void;
  data: T;
  isDisabled?: boolean;
}

function Add<T extends { quantity?: number }>({
  add,
  data,
  isDisabled = false
}: AddButtonType<T>) {
  const handler = add({ ...data,  quantity: (data?.quantity as number) + 1 })
  return (
    <button
      disabled={isDisabled}
      className="shrink-0 px-2 text-md text-gray-500"
      onClick={handler}
    >
      +
    </button>
  )
}

export default memo(Add, (prev, next) => prev.isDisabled === next.isDisabled) as <T>(props: AddButtonType<T>) => JSX.Element