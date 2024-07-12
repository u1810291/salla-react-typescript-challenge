import { useState, useCallback } from 'react'
import category from '../services/category'
import { CategoryI } from '../interfaces/CategoryProducts'
import execute from '../filter/allExceptionFilter'

export const useCategory = () => {
	const [error, setError] = useState<string>('')
	const [success, setSuccess] = useState<CategoryI[]>([])
	const [loading, setLoading] = useState<boolean>(false)

  const fetchData = useCallback(async () => {
    setLoading(true)
    execute<CategoryI[]>(setSuccess, category.allCategories, setError).finally(() => setLoading(false))
  }, [])

  return {
    error,
    loading,
    success,
    fetchData,
  }
}