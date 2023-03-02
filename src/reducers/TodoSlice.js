import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state,action) => {
   
      state.list = [...state.list,action.payload]
    }
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer