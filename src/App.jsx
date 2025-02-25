/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import PaymentPage from './pages/PaymentPage'
import CategoryPage from './pages/CategoryPage'
import CategoryReview from './pages/CategoryReview'
import PageError from './pages/PageError'
import { useGetCategories } from './hooks/useGetCategories'
import { useContext, useEffect } from 'react'
import { CartContext } from './contexts/CartContext'
import { useGetInfo } from './hooks/useGetInfo'
import SecurityForPaymentPage from './components/SecurityForPaymentPage'
import AboutPage from './pages/AboutPage'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import Footer from './components/Footer'

function App() {
  const { categories, getCategories } = useGetCategories()
  const {products, getInfo} = useGetInfo()
  const {addProduct} = useContext(CartContext)
  
  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    const getData = async () => {
      for (const category of categories) {
        await getInfo(category)
      }
    }

    getData()
  }, [categories]);

  useEffect(() => {
    const addAllProductsPerCategory = async () => {
      await products?.forEach(product => {
        addProduct(product)
      });
    }

    addAllProductsPerCategory()
  }, [products])
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/privacity' element={<PoliticaPrivacidad />} />
          <Route path='/paymentPage' element={<SecurityForPaymentPage>
            <PaymentPage />
          </SecurityForPaymentPage>} />
          <Route path='/categories' element={<CategoryPage />}>
            <Route path={`:categoryReview`} element={<CategoryReview />} />
          </Route>
          <Route path='*' element={<PageError />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
