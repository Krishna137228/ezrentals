import React, { useState } from 'react';
import styles from '../styles/login.module.scss';
import Button from '@material-ui/core/Button';
import { Grid,Box } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {login} from '../service/ajax';
import { useSelector, useDispatch } from 'react-redux'
import {updateUser} from '../features/userInfo/userInfoSlice';
import SignUp from './SignUp';
function Login(props) {

  const dispatch = useDispatch()
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [signUp, setSignUp] = useState(false);

  function loginUser() {
    if (username == '' || 
    password == '' ) {
                alert('Please fill all mandatory fields');
                return;
            }

    login({
      'username': username,
      'password': password
    }).then(res => {
      if (res == false) {
        alert('Login failed, please try again')
      } else {
        console.log(res);
        dispatch(updateUser(res))
        // props.saveUserInfo(userInfo)
        console.log(res)
      }
    })
  }

  function signUpHandle() {
    setSignUp(true);
  }

    if (signUp) {
      return <SignUp/ >;
    }
    return (
        <Box className={styles.loginform} maxWidth="xs">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField fullWidth  defaultValue={username} required label="Username" name="username" size="small" variant="outlined" onChange = {(e) => setUserName(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      defaultValue={password} 
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                      onChange = {(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button color="primary" onClick={(e) => loginUser(e)} fullWidth type="submit" variant="contained">
                  Log in
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button color="primary" onClick={(e) => signUpHandle(e)} fullWidth type="submit" variant="contained">
                  Sign Up
                </Button>
              </Grid>
            </Grid>
        </Box>
      );

}
export default Login;