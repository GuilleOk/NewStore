import { useContext, useEffect, useState } from "react"
import { LoginContext } from "../contexts/LoginContext"
import CheckedRadios from "../components/CheckedRadios"

const PaymentPage = () => {
  const { usuario } = useContext(LoginContext)
  const [serviceSelected, setServiceSelected] = useState('')
  const [paymentChoiceSelected, setPaymentChoiceSelected] = useState('')
  const [showAddress, setShowAddress] = useState(false)
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    if (serviceSelected !== 'Pick up in store' && serviceSelected!== '') {
      setShowAddress(true)
    } else{setShowAddress(false)}
  }, [serviceSelected])
  

  const handleService = (e) => {
    if (e.target.checked) {
      setServiceSelected(e.target.value)
    }
  }

  const handlePaymentChoice = (e) => {
    if (e.target.checked) {
      setPaymentChoiceSelected(e.target.value)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (serviceSelected === '' || paymentChoiceSelected === '' || email.trim() === '' || (serviceSelected !== 'Pick up in store' && address === '')) {
      alert('Please fill all formulary fields')
    } else {
      alert('All right')
    }
  }
  return (
    <div>
      <h1 style={{ marginTop: '2rem', textAlign: 'center', width: '100%' }}>Hello {usuario.nombre} {usuario.apellidos}</h1>
      <div className="d-flex justify-content-center align-items-center">
        <div className= 'formPayment'>
          <form className='w-100' onSubmit={handleSubmit}>
            <div className='inputFormLoginContainer'>
                <h4 style={{marginBottom: 0}}>E-mail: </h4>
                <input type="email" autoComplete="off" placeholder='E-mail'className="formInput" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mt-5 d-flex flex-wrap justify-content-between align-items-stretch">
            <div>
              <h4>Types of services: </h4>
                <div className="mx-3 py-3">
                  {/* Componentes con radio buttons */}
                <CheckedRadios text={'Standard shipping'} handleChange={handleService} name={'services'} /> 
                <CheckedRadios text={'Express shipping'} handleChange={handleService} name={'services'} />
                <CheckedRadios text={'Pick up in store'} handleChange={handleService} name={'services'} />
              </div>  
            </div>
            <div>
              <h4>Payment choices: </h4>
              <div className="mx-3 py-3">
                <CheckedRadios text={'Visa'} name={'paymentchoices'} handleChange={handlePaymentChoice} />
                <CheckedRadios text={'Mastercard'} name={'paymentchoices'} handleChange={handlePaymentChoice} />
                <CheckedRadios text={'PayPal'} name={'paymentchoices'} handleChange={handlePaymentChoice} />  
                <CheckedRadios text={'Apple Pay'} name={'paymentchoices'} handleChange={handlePaymentChoice} />
                <CheckedRadios text={'Google Pay'} name={'paymentchoices'} handleChange={handlePaymentChoice} />
              </div>
            </div>
            </div>
            <div className={showAddress ? 'inputFormLoginContainer' : 'd-none'}>
              <h4 style={{marginBottom: 0}}>Address: </h4>
              <input type="text" placeholder='Address' autoComplete="off" className="formInput" onChange={(e) => setAddress(e.target.value)} />
            </div>
            <button
              className='btn btn-outline-primary w-100 loginButton'
              type='submit'
            >Pay</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage