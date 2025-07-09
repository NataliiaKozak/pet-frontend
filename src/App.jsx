import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// import MainLayout from 'components/layout/MainLayout';

import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'

import { MainPage } from './pages/MainPage/MainPage'
import { Categories } from './pages/Categories/Categories'
import { Category } from './pages/Category/Category'
import { Products } from './pages/Products/Products'
import { Product } from './pages/Product/Product'
import { DiscountedItems } from './pages/DiscountedItem/DiscountItem'
import { Cart } from './pages/Cart/Cart'
import { NotFound } from './pages/NotFound/NotFound'
import './App.css'

// import './App.module.css'

function App() {
 return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/discounts" element={<DiscountedItems />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
