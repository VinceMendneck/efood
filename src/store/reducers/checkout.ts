import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  isOpen: boolean
  name: string
  street: string
  city: string
  zip: string
  number: string
  complement: string
}

const initialState: CheckoutState = {
  isOpen: false,
  name: '',
  street: '',
  city: '',
  zip: '',
  number: '',
  complement: ''
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true
    },
    close(state) {
      state.isOpen = false
    },
    setCheckoutData(state, action) {
      state.name = action.payload.name
      state.street = action.payload.street
      state.city = action.payload.city
      state.zip = action.payload.zip
      state.number = action.payload.number
      state.complement = action.payload.complement
    }
  }
})

export const { open, close, setCheckoutData } = checkoutSlice.actions
export default checkoutSlice.reducer
