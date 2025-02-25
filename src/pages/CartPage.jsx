import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import Product from "../components/Product"
import { useNavigate } from "react-router"

const CartPage = () => {
  const [totalToPay, setTotalToPay] = useState(0)
  const { products, removeAll } = useContext(CartContext)
  const [productsInCart, setProductsInCart] = useState([])
  const navigate = useNavigate()

  const showProducts = () => {
    let newTotal = 0
    let updatedProducts = []

    products.forEach(item => {
      item.content.forEach(product => {
        if (product.amount > 0) {
          newTotal += product.amount * product.price

          const existingProduct = updatedProducts.find(p => p.title === product.title)
          if (existingProduct) {
            existingProduct.amount += 1
          } else {
            updatedProducts.push({ ...product })
          }
        }
      })
    })

    setTotalToPay(newTotal)
    setProductsInCart(updatedProducts)
  }

  const redirectToPaymentPage = () => {
    if (totalToPay > 0) {
      navigate('/paymentPage')
    }
  }

  useEffect(() => {
    showProducts()
  }, [products])
  
  return (
    <div>
      <div className="d-flex justify-content-end mx-5 my-3">
        <button className="btn btn-danger cleanCart" onClick={removeAll}><img src="/carro-vacio.png" alt="Vaciar carrito" style={{height: '2rem'}} /></button>
      </div>
      {productsInCart.map(product => {
        return (
          <div key={product.id}>
            <Product product={product} />
          </div>
        )
      })}
      <div className="d-flex justify-content-center gap-5 align-items-center mt-5">
        <button className="btn btn-primary anotherPrimary">Total to pay</button>
        <div style={{fontSize: 'x-large'}}>
          ${totalToPay}
        </div>
      </div>
      <div className="d-flex justify-content-center my-5">
        <button style={{fontWeight: 'bold', fontSize: 'xx-large'}} className="btn btn-outline-primary goToPay" onClick={redirectToPaymentPage}>Go to pay</button>
      </div>
    </div>
  )
}

export default CartPage