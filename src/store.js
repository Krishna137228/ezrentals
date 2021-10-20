import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './features/userInfo/userInfoSlice';
import userInputReducer from './features/userInputs/userInputSlice';
import itemDataReducer from './features/itemData/itemDataSlice';
export const store = configureStore({
  reducer: {
      userInfo: userInfoReducer,
      userInput: userInputReducer,
      itemData: itemDataReducer
  },
})