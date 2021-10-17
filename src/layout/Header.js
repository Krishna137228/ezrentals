import React from "react";
import {Helmet} from 'react-helmet';
import { Button,TextField,Grid,Paper,AppBar,Typography,Toolbar,Box } from "@material-ui/core";
function Header(props) {
    return (
        <div>
            <AppBar position="static">
                <Helmet>
                    <title>Easy Rentals</title>
                </Helmet>
                <Toolbar>
                        <Box display="flex" flexDirection="flex-end">
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Easy Rentals
                            </Typography>
                        </Box>
                    
                    <Box display="flex" flexDirection="flex-end" >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Easy Rentals
                                </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            
        </div>
    );
}
export default Header;