'use client'
import React from 'react';
import { FieldProps } from 'formik';

interface NormalInputProps extends FieldProps{
  autoComplete: 'on' | 'off';
}

export default ({
  field,
  autoComplete,
  form: { touched, errors },
  ...props
}: NormalInputProps) => (
  <div className='flex-col text-red-600'>
    <input
      autoComplete={autoComplete}
      {...field}
      {...props}
      className="w-full p-2 bg-white appearance-none rounded-md border text-md"
    />
    {touched[field.name]
      && errors[field.name]
      && (
        <div className="decoration-red-600 text-red-600">{errors[field.name] as string}</div>
    )}
  </div>
)
