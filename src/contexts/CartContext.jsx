/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react"

export  const CartContext = createContext()

const initialState = []

const reducer = (state, action) => {
  const { type, payload } = action
  
  switch (type) {
    case 'ADD_PRODUCT': {
      const { category, id, title, price, description, image } = payload
      const indexCategory = state.findIndex(element => element.category === category)
      if (indexCategory === -1) {
        console.log([...state, {category, content: [{ category, id, title, price, description, image, amount: 0 }]}])
        return [...state, {category, content: [{ category, id, title, price, description, image, amount: 0 }]}]
      } else {
        const productsCategory = structuredClone(state[indexCategory].content)
        const productIndex = productsCategory.findIndex(element => element.id === id)
        if (productIndex === -1) {
          const newState = structuredClone(state)
          newState[indexCategory].content.push({ category, id, title, price, description, image, amount: 0 })
          return newState
        } else {
          return state
        }
      }
    }
    
    case 'INCREASE_AMOUNT_PRODUCT': { //lógica para incrementar la cantidad de un producto determinado
      const { category, id } = payload
      const categoryIndex = state.findIndex(item => item.category === category)
      const { content } = state[categoryIndex]
      const productIndex = content.findIndex(item => item.id === id)
      const actualState = structuredClone(state)
      actualState[categoryIndex].content[productIndex].amount += 1
      return actualState
    }
      
    case 'DECREASE_PRODUCT': {
      const { category, id } = payload
      const categoryIndex = state.findIndex(item => item.category === category)
      const { content } = state[categoryIndex]
      const productIndex = content.findIndex(item => item.id === id)
      const actualState = structuredClone(state)
      if (actualState[categoryIndex].content[productIndex].amount === 0) {
        return actualState
      } else {
        actualState[categoryIndex].content[productIndex].amount -= 1
        return actualState
      }
    }
      
    case 'REMOVE_PRODUCT': {
      const { category, id } = payload
      return state.map(cat => {
        if (cat.category === category) {
          return {
            ...cat,
            content: cat.content.filter(product => product.id !== id)
          }
        }
        return cat
      })

    }
    case 'REMOVE_ALL': {
      const newState = [...state]
      newState.forEach(category => {
        category.content.forEach(item => {
          item.amount = 0
        })
      })
      return newState
    }
  }
}

const CartContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  
  const addProduct = (product) => dispatch({
    type: 'ADD_PRODUCT',
    payload: product
  })

  const removeProduct = (product) => dispatch({
    type: 'REMOVE_PRODUCT',
    payload: product
  })

  const increaseAmount = (product) => dispatch({
    type: 'INCREASE_AMOUNT_PRODUCT',
    payload: product
  })

  const decreaseAmount = (product) => dispatch({
    type: 'DECREASE_PRODUCT',
    payload: product
  })

  const removeAll = () => dispatch({
    type: 'REMOVE_ALL',
  })

  return (
    <CartContext.Provider value={{products: state, addProduct, removeProduct, removeAll, increaseAmount, decreaseAmount}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider