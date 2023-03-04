import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
    // state and state both is working
      state.value += 2
    },
    decrement: (state) => {
      state.value -= 2
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer