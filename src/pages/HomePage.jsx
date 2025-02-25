import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import CardCategories from "../components/CardCategories"
import PublicidadLG from "../components/PublicidadLG"
import PublicidadSM from "../components/PublicidadSM"

const HomePage = () => {
  const {products} = useContext(CartContext)

  return (
    <div>
      <img src="/images/banner_portada.jpg" alt="banner_home" style={{ borderBottom: '.1rem solid white', boxShadow: '0 1rem 1.2rem -1.2rem white', width: '100%' }} />
      <h1 style={{textAlign: 'center', marginTop: '1rem'}}>CATEGORIES</h1>
      <div className="categories">
        {
          products.map(product => {
          return (
            <>
              <CardCategories product={product} key={product.category} />
            </>
          )
          })
        }
      </div>
      <img src="/images/Banner_electronicos.jpg" alt="banner_electronic" style={{ marginTop: '1rem', width: '100%' }} />
      <PublicidadLG />
      <PublicidadSM />
    </div>
  )
}

export default HomePage