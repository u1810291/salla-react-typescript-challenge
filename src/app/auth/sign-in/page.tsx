'use client'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useAuth } from '../../../hooks/useAuth'
import Spinner from '../../../components/Spinner'
import NormalInput from '../../../components/NormalInput'
import { signInInitialValues, signInSchema} from '../../../schemas/formDataSchema'
import Link from 'next/link'

export default function SignIn() {
  const { signIn, error } = useAuth()
  return (
    <div className="container mx-auto">
      <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
        <div className="flex flex-col text-center items-center justify-center mb-6">
          <h2 className="text-lg">تسجيل الدخول</h2>
          <span className="text-xs text-gray-500">قم بتسجيل الدخول لمتابعة التسوق</span>
        </div>
        <Formik
          initialValues={signInInitialValues}
          validationSchema={signInSchema}
          onSubmit={(values) => signIn(values)}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="email"
                label="اسم المستخدم"
                component={NormalInput}
                placeholder="اسم المستخدم.."
                {...(isSubmitting && { disabled: true })}
              />
              <Field
                name="password" 
                type="password"
                label="كلمة المرور"
                placeholder="الاسم الأول.."
                component={NormalInput}
                {...(isSubmitting && { disabled: true })}
              />
              <div className="flex gap-4 my-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md">
                    {isSubmitting ? <Spinner/> : 'دخول'}
                </button>
                <Link
                  href="/auth/sign-up"
                  className="w-fit text-primary underline p-2 text-md rounded-md"
                >
                    نسيت كلمة المرور؟
                </Link>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center text-red-500 bg-red capitalize">{error as string}</div>
      </div>
    </div>
  )
}
