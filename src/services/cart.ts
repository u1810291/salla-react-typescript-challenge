import services from '.';
import { AddToCartI, UpdateCartI } from '../interfaces/Cart';

export default {
  getCartItems: () => services.get('/cart/'),
  addToCart: (data: AddToCartI) => services.post('/cart/add', data),
  updateCart: (data: UpdateCartI) => services.put('/cart/update', data),
}