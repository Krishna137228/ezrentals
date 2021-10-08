import React from "react";
import {Helmet} from 'react-helmet';
import { Button,TextField,Grid,Paper,AppBar,Typography,Toolbar,Link } from "@material-ui/core";
function Header(props) {
    return (
        <div>
            <AppBar position="static">
                <Helmet>
                    <title>Easy Rentals</title>
                </Helmet>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Easy Rentals
                    </Typography>
                </Toolbar>
            </AppBar>
            
        </div>
    );
}
export default Header;