'use client'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useAuth } from '../../../hooks/useAuth'
import Spinner from '../../../components/Spinner'
import NormalInput from '../../../components/NormalInput'
import { signUpSchema, signUpInitialValues } from '../../../schemas/formDataSchema'
import Link from 'next/link'

export default function SignUp() {
  const { signUp, error, success } = useAuth()

  return (
    <div className="container mx-auto">
      <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
        <div className="flex flex-col text-center items-center justify-center mb-6">
          <h2 className="text-lg">التسجيل</h2>
          <span className="text-xs text-gray-500">قم بالتسجيل لمواصلة التسوق</span>
        </div>
        <Formik
          initialValues={signUpInitialValues}
          validationSchema={signUpSchema}
          onSubmit={(values) => signUp(values)}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="firstName"
                label="الاسم الأول"
                component={NormalInput}
                placeholder="الاسم الأول.."
                {...(isSubmitting && { disabled: true })}
              />
              <Field
                name="lastName"
                label="اسم العائلة"
                component={NormalInput}
                placeholder="اسم العائلة.."
                {...(isSubmitting && { disabled: true })}
              />
              <Field
                name="email"
                type="email"
                label="بريد"
                placeholder="بريد.."
                component={NormalInput}
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
              <Field
                type="password"
                name="confirmPassword"
                component={NormalInput}
                label="تأكيد كلمة المرور"
                placeholder="تأكيد كلمة المرور.."
                {...(isSubmitting && { disabled: true })}
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md">
                    {isSubmitting ? <Spinner/> : 'دخول'}
                </button>
                <Link
                  href="/auth/sign-in"
                  className="w-fit text-primary underline p-2 text-md rounded-md"
                >
                  هل لديك حساب بالفعل؟
                </Link>
              </div>
            </Form>
          )}
        </Formik>
        <div className="flex justify-center text-red-500 bg-red capitalize">{!success && error as string}</div>
      </div>
    </div>
  )
}
