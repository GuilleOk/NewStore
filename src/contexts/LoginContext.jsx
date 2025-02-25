/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react';
import users from '../mocks/users.json' 

const initialState = {}

export const LoginContext = createContext()

const reducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case "LOGIN": {
      console.log('payload', payload)
      const { email, psw } = payload
      const index = users.findIndex(user => (user.email === email) && (psw === user.psw))
      console.log('index: ', index)
      if (index !== -1) {
        return { email, nombre: users[index].nombre, apellidos: users[index].apellidos }
      } else {
        return initialState
      }
    }
    case "LOGOUT": {
      return {}
    }
  }
}


const LoginProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const login = (infoUsuario) => dispatch(
    {
      type: 'LOGIN',
      payload: infoUsuario
    }
  )

  const logout = () => dispatch({
    type: 'LOGOUT'
  }) 

  return (
    <LoginContext.Provider value={{login, logout, usuario: state}}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider