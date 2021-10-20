import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    selectedCategories: [],
    sortBy: 'price',
    order: 'asc'
}
export const userInputSlice = createSlice({
    name: 'userInput',
    initialState,
    reducers: {
      updateSelectedCategories: (state, action) => {
        state.selectedCategories = action.payload.selectedCategories;
      },
        updateSortBy: (state, action) => {
            console.log(action.payload);
        state.sortBy = action.payload.sortBy;
      },
       updateOrder: (state, action) => {
        state.order = action.payload.order;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateSelectedCategories, updateSortBy, updateOrder } = userInputSlice.actions
  
  export default userInputSlice.reducer