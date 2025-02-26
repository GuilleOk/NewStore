/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react';
import users from '../mocks/users.json' 

const initialState = ''

const errorState = {}

export const LoginContext = createContext()

const reducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case "LOGIN": {
      const { email, psw } = payload
      const index = users.findIndex(user => (user.email === email) && (psw === user.psw))
      console.log('index: ', index)
      if (index !== -1) {
        return { email, nombre: users[index].nombre, apellidos: users[index].apellidos }
      } else {
        return errorState
      }
    }
    case "LOGOUT": {
      return {}
    }
      
    case "RESETLOGIN": {
      return initialState
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

  const reset = () => dispatch({
    type: 'RESETLOGIN'
  })

  return (
    <LoginContext.Provider value={{login, reset, logout, usuario: state}}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider