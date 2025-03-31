import { createSlice } from '@reduxjs/toolkit'

export interface PaymentState {
  isOpen: boolean
}

const initialState: PaymentState = {
  isOpen: false
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true
    },
    close(state) {
      state.isOpen = false
    }
  }
})

export const { open, close } = paymentSlice.actions
export default paymentSlice.reducer
