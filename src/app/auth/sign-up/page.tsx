'use client'
import React from 'react'
import { Formik, Form, Field } from 'formik'
import { formSchema, initialValues } from '../../../schemas/formDataSchema'
import NormalInput from 'src/components/NormalInput'

export default function SignUp() {

  return (
    <div className="container mx-auto">
      <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
        <div className="flex flex-col text-center items-center justify-center mb-6">
          <h2 className="text-lg">التسجيل</h2>
          <span className="text-xs text-gray-500">قم بالتسجيل لمواصلة التسوق</span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label className="block mb-2 text-md" htmlFor="first_name">الاسم الأول</label>
              <Field
                name="firstName"
                component={NormalInput}
                placeholder="الاسم الأول.."
              />
            <label className="block mb-2 text-md" htmlFor="last_name">اسم العائلة</label>
              <Field
                name="lastName"
                placeholder="اسم العائلة.."
                component={NormalInput}
              />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <label className="block mb-2 text-md" htmlFor="email">بريد</label>
              <Field
                name="email"
                type="email"
                placeholder="بريد.."
                component={NormalInput}
              />
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : null}
              <label className="block mb-2 text-md" htmlFor="password">كلمة المرور</label>
              <Field
                name="password" 
                type="password"
                placeholder="الاسم الأول.."
                component={NormalInput}
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <label className="block mb-2 text-md" htmlFor="confirm_password">تأكيد كلمة المرور</label>
              <Field
                type="password"
                name="confirmPassword" 
                component={NormalInput}
                placeholder="تأكيد كلمة المرور.."
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div>{errors.confirmPassword}</div>
              ) : null}
              <div className="flex gap-4">
                <button type="submit" className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md">دخول</button>
                <button type="button" className="w-fit text-primary underline p-2 text-md rounded-md">نسيت كلمة المرور؟</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
