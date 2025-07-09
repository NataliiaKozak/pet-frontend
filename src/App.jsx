import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import ScrollToTopButton from './components/ui/ScrollToTopButton/ScrollToTopButton.jsx'
// import MainLayout from 'components/layout/MainLayout';

import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import ConnectedModal from './components/ConnectedModal/ConnectedModal.jsx'

import MainPage from './pages/MainPage/MainPage'
import Categories from './pages/Categories/Categories'
import Category from './pages/Category/Category'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import DiscountedItems from './pages/DiscountedItem/DiscountItem'
import CartPage from './pages/CartPage/CartPage'
import NotFound from './pages/NotFound/NotFound'

import store from './redux/store.js'
import './App.css'

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/discounts" element={<DiscountedItems />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ConnectedModal />
      </BrowserRouter>
    </ReduxProvider>
  )
}

export default App
