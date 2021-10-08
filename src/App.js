import './App.css';
import React, { useState, createContext } from 'react';
import Login from './components/Login';
import Home from './components/home';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



function App() {


  const UserContext = React.createContext({});

  // window.addEventListener('unload', (event) => {
  //   // ...
  //   localStorage.setItem('ezrentalsuserinfo', null);
  // });
  
function getUserInfo() {
  const tokenString = localStorage.getItem('ezrentalsuserinfo');
  const userInfo = JSON.parse(tokenString)
  return userInfo;
}

const [userInfo, setUserInfo] = useState(getUserInfo());
  
function saveUserInfo(userInfo) {
  localStorage.setItem('ezrentalsuserinfo', JSON.stringify(userInfo));
  sessionStorage.setItem('ezrentalsuserinfo', JSON.stringify(userInfo))
  setUserInfo(userInfo)
}

  console.log(userInfo)
  if (!userInfo) {
    return <Login saveUserInfo={saveUserInfo}/>
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
            {userInfo ?  <Redirect to='/home' /> : <Login saveUserInfo={saveUserInfo} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
