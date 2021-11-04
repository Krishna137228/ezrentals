import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid,Container,Button,IconButton, Box } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import styles from '../styles/iteminfo.module.scss';
import {sendEmail} from '../service/ajax';
import Tooltip from '@mui/material/Tooltip';

function Iteminfo(props) {

    const buyerId = useSelector((state) => state.userInfo.username);
    const itemId = props.itemId;
    
    async function sendEmailFn() {
        let res = await sendEmail(buyerId, itemId);
        alert(res.message);
    }
    return (
        <Card>
            <CardMedia
                component="img"
                height="300"
                width="300"
                image={props.imageUrl}
                alt="Img Not Found"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.itemName}
                </Typography>
                    <Box>
                        {props.buyFlag == true
                        ? <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                            <Grid item  xs={8}>
                                {props.itemDescription}
                            </Grid>
                            <Grid item  xs={2}>
                            <Tooltip title={props.address}>
                                <IconButton color="primary">
                                    <LocationOnIcon />
                                </IconButton>
                            </Tooltip>
                                
                            </Grid>
                            <Grid item  xs={2}>
                                <IconButton color="primary" aria-label="Send email">
                                    <MailOutlineIcon onClick={() => sendEmailFn()}/>
                                </IconButton>
                            </Grid>
                            <Grid item  xs={12}>
                            
                                <Grid container direction="row">
                                    <Grid item xs={6}>Price: {props.price}$</Grid>
                                    <Grid item xs={6}>Day rent: {props.rent}$</Grid>
                                </Grid>
                                    
                            </Grid>
                            
                        </Grid> 
                        : <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                            <Grid item  xs={7}>
                                {props.itemDescription}
                            </Grid>
                            <Grid item  xs={3}>
                                {props.isSold == true 
                                ? <Typography>Sold</Typography>
                                : <Typography>In Sale</Typography>
                                }
                            </Grid>
                            <Grid item  xs={1}>
                                <Typography>{props.contacted}</Typography>
                            </Grid>
                            <Grid item  xs={1}>
                                <MailOutlineIcon />
                                
                            </Grid>
                            
                        </Grid> 
        }
                    </Box>
                    
      </CardContent>
        </Card>
    );
}


export default Iteminfo;