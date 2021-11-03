import './App.css';
import React, { useState, createContext, useEffect } from 'react';
import Login from './components/Login';
import Home from './components/home';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {updateLocation} from './features/userInfo/userInfoSlice';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AdminDashBoard from '../src/components/admin/AdminDashBoard'


function App() {

  // window.addEventListener('unload', (event) => {
  //   // ...
  //   localStorage.setItem('ezrentalsuserinfo', null);
  // });
  
// function getUserInfo() {
//   const tokenString = localStorage.getItem('ezrentalsuserinfo');
//   const userInfo = JSON.parse(tokenString)
//   return userInfo;
// }

// const [userInfo, setUserInfo] = useState(getUserInfo());
  
// function saveUserInfo(userInfo) {
//   localStorage.setItem('ezrentalsuserinfo', JSON.stringify(userInfo));
//   sessionStorage.setItem('ezrentalsuserinfo', JSON.stringify(userInfo))
//   setUserInfo(userInfo)
// }
const dispatch = useDispatch()
useEffect(() => {
  const position = getLocation();
}, [])

// fetches location
const getLocation = () => {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(updateLocation({position: position}));
      
    }, () => {
      alert('Unable to retrieve your location');
    });
  }
}
const userInfo = useSelector((state) => {
  return state.userInfo;
})

  console.log(userInfo)
  if (!userInfo.username) {
    return <Login />
  }
  if (userInfo.username == 'admin') {
    return <AdminDashBoard />
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            {userInfo.username ?  <Redirect to='/home' /> : <Login />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
