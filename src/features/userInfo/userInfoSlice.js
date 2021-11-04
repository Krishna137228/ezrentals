import { createSlice } from '@reduxjs/toolkit'

import {getSampleItems, getSampleUser, getBlankUser} from '../../sampleData';
//const initialState = getSampleUser();
const initialState = getBlankUser();

  
  export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
      updateUser: (state, action) => {
          console.log("Within reducer");
          console.log(action.payload.username);
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.username = action.payload.username
        state.firstName = action.payload.firstName;
          state.middleName=action.payload.middleName;
          state.lastName=action.payload.lastName;
          state.mobileNumber = action.payload.mobileNumber;
          state.emailId = action.payload.emailId;
          
      }, 
      signOutUser: (state) => {
          state.username = null;
          state.firstName = null;
          state.middleName=null;
          state.lastName=null;
          state.mobileNumber = null;
          state.emailId = null;
      },
      updateLocation: (state, action) => {
          const location = {};
          location.lat = action.payload.position.coords.latitude;
          location.lng = action.payload.position.coords.longitude;
          state.location=location;
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateUser, signOutUser,updateLocation } = userInfoSlice.actions
  
  export default userInfoSlice.reducer