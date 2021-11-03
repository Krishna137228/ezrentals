import React, { useState } from 'react';
import styles from '../styles/signup.module.scss';
import Button from '@material-ui/core/Button';
import { Grid,Box } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {signup} from '../service/ajax';
import { useDispatch } from 'react-redux'
import {updateUser} from '../features/userInfo/userInfoSlice';
function SignUp(props) {

  const dispatch = useDispatch()
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');  
  const [lastname, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState();

  async function signUpHandle() {
    
    if (username == '' || 
    password == '' || 
    firstname == '' || 
    middlename == '' || 
    lastname == '' || 
    email == '' || 
    mobileNumber == ''  ) {
                alert('Please fill all mandatory fields');
                return;
            }

    const paylaod = {
              'userInfo': {
                username: username,
                firstName: firstname, 
                middleName: middlename,
                lastName: lastname,
                mobileNumber: mobileNumber,
                emailId: email 
              }, 'userSecret': {
                username: username,
                password: password,
              }
      }
    let res = await signup(paylaod);
    if (res != true) {
      alert(res);
    } else {
      dispatch(updateUser(paylaod.userInfo))
      // props.saveUserInfo(userInfo)
      console.log(paylaod.userInfo)
      console.log('Signed up ')
    }
  }

    return (
        <Box className={styles.signupform} maxWidth="s">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField required fullWidth defaultValue={firstname} label="First Name" name="firstName" size="small" variant="outlined" onChange = {(e) => setFirstName(e.target.value)} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField required fullWidth defaultValue={middlename} label="Middle Name" name="middleName" size="small" variant="outlined" onChange = {(e) => setMiddleName(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth defaultValue={lastname} label="Last Name" name="lastName" size="small" variant="outlined" onChange = {(e) => setLastName(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth defaultValue={email} label="Email Id" name="emailId" size="small" variant="outlined" onChange = {(e) => setEmail(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth defaultValue={mobileNumber} label="Mobile Number" name="mobileNumber" size="small" variant="outlined" onChange = {(e) => setMobileNumber(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField required fullWidth defaultValue={username} label="Username" name="username" size="small" variant="outlined" onChange = {(e) => setUserName(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                    required
                    defaultValue={password}
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
                    <Button color="primary" onClick={(e) => signUpHandle(e)} fullWidth type="submit" variant="contained">
                    Sign Up
                    </Button>
                </Grid>
            </Grid>
            
        </Box>
      );

}
export default SignUp;