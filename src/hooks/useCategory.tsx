import { useState, useCallback } from 'react'
import category from '../services/category'
import { CategoryI } from '../interfaces/CategoryProducts'

export const useCategory = () => {
	const [error, setError] = useState<string>('')
	const [success, setSuccess] = useState<CategoryI[]>([])
	const [loading, setLoading] = useState<boolean>(false)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await category.allCategories()
      const data: CategoryI[] = res.data
      setSuccess(data)
    } catch(error) {
      console.error(error.response?.data || error.message)
			setError(error.response?.data || error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    error,
    loading,
    success,
    fetchData,
  }
}