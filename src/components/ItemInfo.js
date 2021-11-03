import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid,Container,Button,IconButton, Box } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import styles from '../styles/iteminfo.module.scss';
import {sendEmail} from '../service/ajax';

function Iteminfo(props) {

    const buyerId = useSelector((state) => state.userInfo.username);
    const itemId = props.itemId;
    
    async function sendEmailFn() {
        let res = await sendEmail(buyerId, itemId);
        alert(res.data);
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
                            <Grid item  xs={7}>
                                {props.itemName}
                            </Grid>
                            <Grid item  xs={3}>
                            
                                {props.price}$
                                    
                            </Grid>
                            <Grid item  xs={2}>
                                <IconButton color="primary" aria-label="Send email">
                                    <MailOutlineIcon onClick={() => sendEmailFn()}/>
                                </IconButton>
                            </Grid>
                        </Grid> 
                        : <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                            <Grid item  xs={7}>
                                {props.itemName}
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