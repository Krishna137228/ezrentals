import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    items: [],
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
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateItems } = itemDataSlice.actions
  
  export default itemDataSlice.reducer