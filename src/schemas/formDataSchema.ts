import * as yup from 'yup'

export const signInInitialValues = {
  email: '',
  password: '',
  lastName: '',
  firstName: '',
  confirmPassword: ''
}

export const signInSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
	email: yup.string().nullable().label('Email Address').required().email('Invalid Email Address'),
})


export const signUpInitialValues = {
  email: '',
  password: '',
  lastName: '',
  firstName: '',
  confirmPassword: ''
}

export const signUpSchema = yup.object().shape({
  password: yup.string().required('Password is required'),
	lastName: yup.string().nullable().label('Last Name').required().min(3).max(40),
	firstName: yup.string().nullable().label('First Name').required().min(3).max(40),
  confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Passwords must match'),
	email: yup.string().nullable().label('Email Address').required().email('Invalid Email Address'),
})
