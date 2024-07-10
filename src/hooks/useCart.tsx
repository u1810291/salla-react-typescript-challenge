import cart from '../services/cart'
import { useState, useCallback } from 'react'
import { AddToCartI, CartItemsI, UpdateCartI } from '../interfaces/Cart'
import execute from '../filter/allExceptionFilter'

export const useCart = () => {
	const [error, setError] = useState<string>('')
	const [success, setSuccess] = useState<CartItemsI>()
	const [loading, setLoading] = useState<boolean>(false)

  const addToCart = useCallback((data: AddToCartI) => async () => {
    setLoading(true)
    execute<CartItemsI>(setSuccess, () => cart.addToCart(data), setError).finally(() => setLoading(false))
  }, [])

  const fetchCartData = useCallback(() => {
    setLoading(true)
    execute<CartItemsI>(setSuccess, cart.getCartItems, setError).finally(() => setLoading(false))
  }, [])

  const updateCartData = useCallback((data: UpdateCartI) => async () => {
    setLoading(true)
    execute<CartItemsI>(setSuccess, () => cart.updateCart(data), setError).finally(() => {
      setLoading(false)
      //TODO: this part needs to be moved to context api or redux in future
      fetchCartData()
    })
  }, [])

  const deleteCartData = useCallback((id: number) => async () => {
    setLoading(true)
    execute<CartItemsI>(setSuccess, () => cart.deleteCartItem(id), setError).finally(() => {
      setLoading(false)
      fetchCartData()
    })
  }, [])

  return {
    error,
    success,
    loading,
    addToCart,
    fetchCartData,
    updateCartData,
    deleteCartData,
  }
}