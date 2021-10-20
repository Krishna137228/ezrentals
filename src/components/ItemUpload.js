import React, { useEffect, useState } from "react";
import { Grid,Typography,TextField,Button, Box } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
function ItemUpload(props) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      var [itemName, setItemName] = useState('');
      var [itemDescription, setItemDescription] = useState('');
      var [category, setCategory] = useState('');
      var [price, setPrice] = useState();
      var [location, setLocation] = useState();
      var [sellerPhnNbr, setSellerPhnNbr] = useState(useSelector((state) => state.userInfo.phoneNumber));
      var [sellerEmail, setSellerEmail] = useState(useSelector((state) => state.userInfo.emailId));
      var [imageUrl, setItemName] = useState('');

      function uploadItem() {
          console.log('upload image first ');
          console.log('get image url ');
          console.log('save to db');
      }

    return (
    
        <Box sx={style}>
            <Grid container spacing={2}>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography id="modal-modal-title" variant="h5" component="h2">
                                Enter Item Details
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField required fullWidth defaultValue={itemName} label="Item Name" name="itemName" size="small" variant="outlined" onChange = {(e) => setItemName(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth defaultValue={itemDescription} label="Item Description" name="itemDescription" size="small" variant="outlined" onChange = {(e) => setItemDescription(e.target.value)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField required fullWidth defaultValue={price} label="Price" name="price" size="small" variant="outlined" onChange = {(e) => setPrice(e.target.value)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField required fullWidth defaultValue={category} label="Category" name="category" size="small" variant="outlined" onChange = {(e) => setCategory(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth defaultValue={sellerPhnNbr} label="Phone Nbr" name="itemName" size="small" variant="outlined" onChange = {(e) => setSellerPhnNbr(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth defaultValue={sellerEmail} label="Email Id" name="itemName" size="small" variant="outlined" onChange = {(e) => setSellerEmail(e.target.value)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="center" spacing={2}>
                        <Grid item>
                            <Button  variant="outlined" onClick={() => props.handleClose()}>Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button color="primary" variant="contained" onClick={() => uploadItem()}>Upload</Button>
                        </Grid>
                    </Grid>
            
                </Grid>
            
            </Grid>
           
           
        </Box>
    );
}

export default ItemUpload;