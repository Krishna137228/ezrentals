import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    selectedCategories: [],
    sortBy: 'price',
    order: 'asc',
    categories: [],
    buyFlag: true
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
      },
      updateBuyFlag:  (state, action) => {
        state.buyFlag = action.payload.buyFlag;
      },
      updateCategories: (state, action) => {
        console.log(action.payload.categories)
        state.categories = action.payload.categories;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateSelectedCategories, updateSortBy, updateOrder,updateBuyFlag, updateCategories } = userInputSlice.actions
  
  export default userInputSlice.reducer