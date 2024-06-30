import * as yup from 'yup';

 
export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const formSchema = yup.object().shape({
	firstName: yup.string().nullable().label('First Name').required().min(3).max(40),
	lastName: yup.string().nullable().label('Last Name').required().min(3).max(40),
	email: yup.string().nullable().label('Email Address').required().email('Invalid Email Address'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), undefined], 'Passwords must match')
});

