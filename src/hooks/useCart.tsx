import cart from '../services/cart'
import { useState, useCallback } from 'react'
import { AddToCartI, CartItemsI } from '../interfaces/Cart'
import { AxiosResponse } from 'axios'
import execute from '../filter/allExceptionFilter'

export const useCart = () => {
	const [error, setError] = useState<string>('')
	const [success, setSuccess] = useState<CartItemsI>()
	const [loading, setLoading] = useState<boolean>(false)

  const addToCart = useCallback((data: AddToCartI) => async () => {
    setLoading(true)
    try {
      const res = await cart.addToCart(data)
      setSuccess(res.data)
    } catch (error) {
      console.error(error.response?.data || error.message)
			setError(error.response?.data || error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const fetchCartData = useCallback(() => {
    setLoading(true)
    execute<CartItemsI>(setSuccess, cart.getCartItems, setError).finally(() => setLoading(false))
  }, [])

  const updateCartData = useCallback((data) => async () => {
    setLoading(true)
    
  } , [])
  return {
    error,
    success,
    loading,
    addToCart,
    fetchCartData
  }
}