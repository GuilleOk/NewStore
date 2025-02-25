import { useCallback, useState } from "react"

export const useGetInfo = () => {
  const [products, setProducts] = useState([])
  const getInfo = useCallback(
    async(category) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}?limit=6`)
        if (response.ok) {
          const data = await response.json()      
          setProducts(data)
        } else {
          throw new Error('Something went wrong with the fetch')
        }
      } catch (error) {
        console.error(error)
      }
    },
    [products],
  )
  
  return {products, getInfo}
}