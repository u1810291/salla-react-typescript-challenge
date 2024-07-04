import { UserSignInI, UserSignUpI } from 'src/interfaces/UseAuth'
import service from '.'

export default {
  me: () => service.post('/user/all'),
  signUp: (data: UserSignUpI) => service.post('/user/signup', data),
  signIn: (data: UserSignInI) => service.post('/user/signIn', data),
}