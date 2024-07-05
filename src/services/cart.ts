import services from '.';
import { AddToCartI } from '../interfaces/Cart';

export default {
  addToCart: (data: AddToCartI) => services.post('/cart/add', {
    productId: data.productId,
    quantity: data.quantity
  })
}