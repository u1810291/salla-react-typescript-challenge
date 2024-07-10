import { ProductI } from './CategoryProducts';

export interface AddToCartI {
  productId: number;
  quantity: number;
}

export interface ItemsI {
  id: number;
  quantity: number;
  product: ProductI;
}

export interface CartItemsI {
  cartItems: ItemsI[]
  totalCost: number
}

export interface UpdateCartI {
  id: number;
  quantity?: number;
  productId: number;
}
