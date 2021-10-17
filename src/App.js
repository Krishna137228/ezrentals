import './App.css';
import React, { useState, createContext } from 'react';
import Login from './components/Login';
import Home from './components/home';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



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

const userInfo = useSelector((state) => {
  return state.userInfo;
})

  console.log(userInfo)
  if (!userInfo.userName) {
    return <Login />
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
            {userInfo.userName ?  <Redirect to='/home' /> : <Login />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
