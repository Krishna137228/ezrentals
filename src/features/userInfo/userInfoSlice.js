import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    userName: null,
    currentlySelling: [], 
    sold: [],
    bought: []
  }
  
  export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
      updateUser: (state, action) => {
          console.log("Within reducer");
          console.log(action.payload.userName);
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.userName = action.payload.userName
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateUser } = userInfoSlice.actions
  
  export default userInfoSlice.reducer