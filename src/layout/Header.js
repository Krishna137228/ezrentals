import React from "react";
import {Helmet} from 'react-helmet';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { useSelector, useDispatch } from 'react-redux'
import {signOutUser} from '../features/userInfo/userInfoSlice';
import { Button,TextField,Grid,Paper,AppBar,Typography,Toolbar,Box } from "@material-ui/core";
function Header(props) {
    const dispatch = useDispatch();

    const userInfo = useSelector((state) => {
        return state.userInfo;
      })

    function signOut() {
        dispatch(signOutUser());
    }

    return (
        <div>
            <AppBar position="static">
                <Helmet>
                    <title>Easy Rentals</title>
                </Helmet>
                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item>
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                        Easy Rentals
                                    </Typography>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                        {
                            userInfo.userName != null 
                            ?   <Grid item xs={6}>
                                    <Grid container spacing={8} direction="row-reverse">
                                        <Grid item>
                                            <Button size="medium" style={{color: '#FFFFFF'}} startIcon={<AccountCircleSharpIcon/>}  onClick={() => signOut()} type="submit" variant="text">
                                                Sign Out
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                {userInfo.userName}
                                            </Typography>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                            :
                                <></>
                        }
                        </Grid>
                </Toolbar>
            </AppBar>
            
        </div>
    );
}
export default Header;