import React, { useState } from 'react';
import styles from '../styles/login.module.scss';
import Button from '@material-ui/core/Button';
import { Grid,Box } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {login} from '../service/ajax';
import { useSelector, useDispatch } from 'react-redux'
import {updateUser} from '../features/userInfo/userInfoSlice';
function Login(props) {

  const dispatch = useDispatch()
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  function loginUser() {
    let userInfo = login({
      'username': username,
      'password': password
    });
    dispatch(updateUser(userInfo))
    // props.saveUserInfo(userInfo)
    console.log(userInfo)
  }

    return (
        <Box className={styles.loginform} maxWidth="xs">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Username" name="username" size="small" variant="outlined" onChange = {(e) => setUserName(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
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
                <Button color="primary" fullWidth type="submit" variant="contained">
                  Sign Up
                </Button>
              </Grid>
            </Grid>
        </Box>
      );

}
export default Login;