import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import modalReducer from './slices/modalSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
  devTools: true,
})
// devTools: process.env.NODE_ENV !== 'production', // Автоматическое включение только в development
export default store
