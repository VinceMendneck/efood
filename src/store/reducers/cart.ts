import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurants } from '../../pages/Home'

type CartItem = Restaurants['cardapio'][0]

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.items.splice(index, 1)
      }
    }
  }
})

cartSlice.actions.add

export const { add, open, close, remove } = cartSlice.actions

export default cartSlice.reducer
