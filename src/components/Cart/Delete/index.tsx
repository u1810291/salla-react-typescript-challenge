import React from 'react'

type DeletePropsTypes = {
  id: number;
  delete: (id: number) => () => void;
}

export default function Delete({
  id,
  delete: deleteFunc 
}: DeletePropsTypes) {
  const handler = deleteFunc(id)
  return (
    <button
      type="button"
      className="w-[28px] h-[28px] shrink-0 flex items-center justify-center
        text-xs border border-red-500 text-red-500 rounded-full p-1"
      onClick={() => handler()}
    >
      <i className="sicon-trash"></i>
    </button>
  )
}
