import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid,Container,Button,IconButton, Box } from "@material-ui/core";

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import styles from '../styles/iteminfo.module.scss';

function Iteminfo(props) {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.itemName}
                </Typography>
                    <Box>
                        <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                <Grid item  xs={7}>
                                    {props.itemName}
                                </Grid>
                                <Grid item  xs={3}>
                                   
                                    Rs {props.price}
                                        
                                </Grid>
                                <Grid item  xs={2}>
                                    <IconButton color="primary" aria-label="Send email">
                                        <MailOutlineIcon onClick={() => {console.log("Email sent to seller")}}/>
                                    </IconButton>
                                </Grid>
                        </Grid> 
                    </Box>
                    
      </CardContent>
        </Card>
    );
}


export default Iteminfo;