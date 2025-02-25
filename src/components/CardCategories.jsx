import { useNavigate } from "react-router"

/* eslint-disable react/prop-types */
const CardCategories = ({ product }) => {
  let { category } = product
  const Category = category.toUpperCase()
  const navigate = useNavigate()

  const redirectToCategory = ({ actualCategory }) => {
    navigate(`/categories/${actualCategory}`)
  }
  return (
    <div className="CardCategoriesContainer" onClick={() => redirectToCategory({actualCategory: category})}>
      {/* <div className="d-sm-flex d-lg-none" style={{flexDirection: 'column', width: '100%', height: '100%'}}>
        <div>
          <img src={product.content[0].image} alt={product.content[0].title} className="imageCards" />
        </div>
        <div style={{textAlign: 'center', fontWeight: 'bold', zIndex: 1000}}>{category}</div>
      </div> */}
      <div className="cardCategory">
        <div>
          <img src={product.content[0].image} alt={product.content[0].title} className="imageCards" />
        </div>
        <div style={{fontWeight: 'bold', fontSize: '1.5rem', textShadow: '0.1rem 0.1rem .5rem black, 0 0 .08rem black', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'whitesmoke', zIndex: 1000}}>{Category}</div>
      </div>
    </div>
  )
}

export default CardCategories