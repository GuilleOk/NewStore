import { useContext } from "react"
import { useParams } from "react-router"
import { CartContext } from "../contexts/CartContext"
import ProductCard from "../components/ProductCard"

const CategoryReview = () => {
  const { categoryReview } = useParams()
  const { products } = useContext(CartContext)
  const categoryToShow = products.filter(product => product.category === categoryReview)
  const { content } = categoryToShow[0]

  return (
    <div >
      <h1 style={{ marginTop: '3rem' }}>{categoryReview.toUpperCase()}</h1>
      <div className="productsToShow">
      {
        content.map(item => {
          const {category, description, id, image, price, title} = item
          return (
            <div key={id} className="productToShow">
            <ProductCard category={category} description={description} image={image} price={price} title={title} id={id} />
            </div>
          )
        })
      }
      </div> 
    </div>
  )
}

export default CategoryReview