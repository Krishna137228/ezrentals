import { createSlice } from '@reduxjs/toolkit'

import {getSampleItems, getSampleUser, getBlankUser} from '../../sampleData';
const initialState = getSampleUser();
//const initialState = getBlankUser();

  
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
        state.firstName = action.payload.firstName;
          state.middleName=action.payload.middleName;
          state.lastName=action.payload.lastName;
          state.phoneNumber = action.payload.phoneNumber;
          state.emailId = action.payload.emailId;
      }, 
      signOutUser: (state) => {
          state.userName = null;
          state.firstName = null;
          state.middleName=null;
          state.lastName=null;
          state.phoneNumber = null;
          state.emailId = null;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateUser, signOutUser } = userInfoSlice.actions
  
  export default userInfoSlice.reducer