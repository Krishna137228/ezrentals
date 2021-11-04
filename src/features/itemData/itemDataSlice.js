import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    items: [],
    effItems: [],
    page: 1,
    totalPages: 1
}


export const itemDataSlice = createSlice({
    name: 'itemData',
    initialState,
    reducers: {
      updateItems: (state, action) => {
        console.log(action.payload.items)
        state.items = action.payload.items;
      },
      updateEffItems: (state, action) => {
        console.log(action.payload.effItems)
        state.effItems = action.payload.effItems;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateItems, updateEffItems } = itemDataSlice.actions
  
  export default itemDataSlice.reducer