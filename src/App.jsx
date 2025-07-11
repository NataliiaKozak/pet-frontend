import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import ScrollToTopButton from './ui/ScrollToTopButton/ScrollToTopButton.jsx'

import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import ConnectedModal from './components/ConnectedModal/ConnectedModal.jsx'

import MainPage from './pages/MainPage/MainPage'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage.jsx'
import CategoryProducts from './pages/CategoryProducts/CategoryProducts.jsx'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import DiscountedPage from './pages/DiscountedPage/DiscountedPage'
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
          <Route path="/categories" element={<CategoriesPage />} />
          <Route
            path="/categories/:categoryId"
            element={<CategoryProducts />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/discounts" element={<DiscountedPage />} />
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
