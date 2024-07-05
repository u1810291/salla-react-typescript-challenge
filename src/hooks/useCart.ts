import { useState, useCallback } from 'react'
import { ProductI } from '../interfaces/CategoryProducts'
import cart from '../services/cart'
import { AddToCartI } from '../interfaces/Cart'

export const useCart = () => {
	const [error, setError] = useState<string>('')
	const [success, setSuccess] = useState<ProductI | null>(null)
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
  
  return {
    error,
    success,
    loading,
    addToCart
  }
}