/* eslint-disable react/prop-types */

import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { AddAmount, ReduceAmount } from "./ModifyAmount"

const Product = ({ product }) => {
  const { decreaseAmount, increaseAmount } = useContext(CartContext)
  
  const handleIncreaseAmount = ({ id, category }) => {
    increaseAmount({ category, id })
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="productCartContainer">
        <div className="imageProductCart">
          <img src={product.image} alt={product.title} className="imageCart" />
        </div>
        <div className="contentproductCart">
          <h5 style={{textAlign: 'center'}}>{product.title}</h5>
          <div className="d-flex justify-content-around align-items-center">
            <div onClick={() => decreaseAmount({category: product.category, id: product.id})}>
              <ReduceAmount />
            </div>
            <p style={{ margin: '0', fontWeight: 'bold' }}>Amount: {product.amount}</p>
            <div onClick={() => handleIncreaseAmount({id: product.id, category: product.category})}>
              <AddAmount />
            </div>
          </div>
      </div>
      <div style={{color: 'white', padding: '1rem'}}>
        <hr />
      </div>
      </div>
    </div>
  )
}

export default Product