import { useCallback, useState } from "react"

export const useGetCategories = () => {
  const [categories, setCategories] = useState([])
  const getCategories = useCallback(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      if (response.ok) {
        const data = await response.json()      
        setCategories(data)
      } else {
        throw new Error('Something went wrong with the fetch')
      }
    } catch (error) {
      console.error(error)
    }
  }, [categories])
  
  return { categories, getCategories }
}