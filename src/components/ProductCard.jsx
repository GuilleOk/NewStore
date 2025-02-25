import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"

/* eslint-disable react/prop-types */
const ProductCard = ({ category, description, image, price, title, id }) => {
  const [showToast, setShowToast] = useState(false)
  const {increaseAmount} = useContext(CartContext)

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
      <h4 style={{ textAlign: 'center', margin: '0 .1rem', zIndex: 1000 }}>{title}</h4>
      <div style={{margin: '1rem .5rem', display: 'flex', justifyContent: 'space-around'}}>
        <button className="btn btn-outline-primary">Price: ${price}</button>  
        <button className="btn btn-outline-primary" onClick={handleView}><img src="/EyeV2.svg" alt="show" style={{width: '2.1rem'}} /></button>  
        <button className="btn btn-outline-primary" onClick={()=> handleIncreaseAmount({id, category})}><img src="/shopping.svg" alt="add to cart" style={{width: '2.1rem'}} /></button>  
      </div>
      <div className={showToast ? 'show toast align-items-center w-75' : 'toast align-items-center'} style={{zIndex: '3000'}} role="alert" aria-live="assertive" aria-atomic="true">
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
                  <button className="btn btn-primary">Price: ${price}</button>  
                  <button className="btn btn-primary"><img src="/shopping.svg" alt="add to cart" style={{width: '2.1rem'}} /></button>  
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