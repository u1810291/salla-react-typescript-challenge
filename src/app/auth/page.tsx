import React from 'react'

export default function Login() {
  return (
    <>
      <header className="w-full">
        <div className="container">
          <div className="md:py-6 py-4">
            <div className="flex justify-center flex-col sm:flex-row gap-4 items-center">
              <div className="flex flex-col items-center gap-4 relative">
                <a href="index.html" className="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50">
                  <img src="https://cdn.salla.network/images/logo/logo-square.png" alt="Logo" />
                </a>
                <div className="flex flex-col items-center">
                  <h1 className="text-xl text-center">متجر التجربة الجميلة</h1>
                  <small className="text-gray-400 text-center">متجرك لكل تجاربك وأفكارك الجميلة</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full main flex-auto">
        <div className="container">
          <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto">
            <div className="flex flex-col text-center items-center justify-center mb-6">
              <h2 className="text-lg">تسجيل الدخول</h2>
              <span className="text-xs text-gray-500">قم بتسجيل الدخول لمتابعة التسوق</span>
            </div>
            <form method="post" action="#" className="flex flex-col w-full">
              <div className="mb-4">
                <label className="block mb-2 text-md" htmlFor="username">اسم المستخدم</label>
                <input type="text" name="username" id="username" autoComplete="on" className="w-full p-2 bg-white appearance-none rounded-md border text-md" placeholder="اسم المستخدم.." />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-md" htmlFor="password">كلمة المرور</label>
                <input type="password" name="password" autoComplete="on" id="password" className="w-full p-2 bg-white appearance-none rounded-md border text-md" placeholder="كلمة المرور.." />
              </div>
              <div className="flex gap-4">
                <button type="button" className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md">دخول</button>
                <button type="button" className="w-fit text-primary underline p-2 text-md rounded-md">نسيت كلمة المرور؟</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className="w-full h-[80px] flex items-center justify-center text-primary bg-secondary-50 mt-4 md:mt-6">
        <p className="text-sm">كافة الحقوق محفوظة لدى: متجر التجربة الجميلة | 2023</p>
      </footer>
    </>
  )
}
