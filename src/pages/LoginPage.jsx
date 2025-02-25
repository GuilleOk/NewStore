import { useLocation, useNavigate } from "react-router"
import {useContext, useState} from "react"
import { LoginContext } from "../contexts/LoginContext"

const LoginPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const {login} = useContext(LoginContext)
  const [email, setEmail] = useState('')
  // const [surName, setSurName] = useState('')
  const [psw, setPsw] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({ nombreUsu: name, apellidosUsu: surName, psw })
    login({ email, psw })
    navigate(from, {replace: true})
  }
  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPswChange = (e) => {
    setPsw(e.target.value)
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className= 'formLogin'>
        <form className='w-100' onSubmit={handleSubmit}>
          <div className='inputFormLoginContainer'>
              <h4 style={{marginBottom: 0}}>E-mail: </h4>
              <input type="text" placeholder='E-mail' autoComplete="off" onChange={onEmailChange} />
          </div>
          <div className= 'inputFormLoginContainer'>
            <h4 style={{marginBottom: 0}}>Password: </h4>
            <input type="password" autoComplete="off" placeholder='Password' onChange={onPswChange} />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              className='btn btn-outline-primary loginButton'
              type='submit'
            >Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage