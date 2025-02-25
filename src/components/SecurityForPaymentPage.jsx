/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { LoginContext } from "../contexts/LoginContext"

const SecurityForPaymentPage = ({children}) => {
  const { usuario } = useContext(LoginContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log('usuario: ', usuario)
    if (JSON.stringify(usuario) === '{}') {
      navigate('/login', { state: { from: location } })
    }    
  })
  
  return (
    <div>
      {children}
    </div>
  )
}

export default SecurityForPaymentPage