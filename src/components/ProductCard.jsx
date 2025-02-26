import { useContext, useEffect, useRef, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import {WatchDescription, CartShop} from "./ModifyAmount"

/* eslint-disable react/prop-types */
const ProductCard = ({ category, description, image, price, title, id }) => {
  const [showToast, setShowToast] = useState(false)
  const { increaseAmount } = useContext(CartContext)
  const toastRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showToast && toastRef.current && !toastRef.current.contains(e.target)) {
        setShowToast(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showToast])

  const handleView = () => {
    setShowToast(!showToast)
    if (!showToast) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const handleIncreaseAmount = ({id,category}) => {
    increaseAmount({ category, id })
  }

  return (
    <div style={{ minHeight: '100%' }} className="productContainer">
      <div style={{overflow: 'hidden'}}>
        <img src={image} alt={title} className="productImage" />
      </div>
      <h4 style={{ textAlign: 'center', margin: '0 .1rem', zIndex: 800 }}>{title}</h4>
      <div style={{margin: '1rem .5rem', display: 'flex', justifyContent: 'space-around'}}>
        <button className="btn btn-outline-primary">Price: ${price}</button>  
        <button className="btn btn-outline-primary" onClick={handleView}><WatchDescription /></button>  
        <button className="btn btn-outline-primary" onClick={()=> handleIncreaseAmount({id, category})}><CartShop /></button>  
      </div>
      <div ref={toastRef} className={showToast ? 'show toast align-items-center w-75' : 'toast align-items-center'} style={{zIndex: '900'}} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">
            <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowToast(false)}></button>
            <div className="row">
              <div className="d-flex col justify-content-center">
                <img src={image} alt={title} className="imageDescriptionProduct" />                
              </div>
              <div className="col">
                <h2 style={{ color: 'black', textAlign: 'center' }}>{title.toUpperCase()}</h2>
                <div style={{ color: 'black', textAlign: 'justify' }}>{description}</div>
                <div style={{margin: '1rem .5rem', display: 'flex', justifyContent: 'space-around'}}>
                  <div style={{color: 'black', display:'flex', alignItems: 'center'}}>Price: ${price}</div>  
                  <button className="btn btn-primary" onClick={()=> handleIncreaseAmount({id, category})}><CartShop /></button>  
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard