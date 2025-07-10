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

export default store
