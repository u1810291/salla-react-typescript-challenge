import services from '.';
import { AddToCartI, UpdateCartI } from '../interfaces/Cart';

export default {
  getCartItems: () => services.get('/cart/'),
  addToCart: (data: AddToCartI) => services.post('/cart/add', data),
  deleteCartItem: (id: number) => services.delete(`/cart/delete/${id}`),
  updateCart: (data: UpdateCartI) => services.put(`/cart/update/${data.id}`, data),
}