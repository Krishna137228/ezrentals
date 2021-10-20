import React, { useEffect, useState } from "react";
import { Grid,Typography,TextField,Button, Box } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
function ItemStatus(props) {
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

      return (

        <Box sx={style}>
            <Grid container spacing={2}>
                <Grid item>
                    List of items sold/uploaded by user
                </Grid>
            </Grid>
        </Box>
      );

}

export default ItemStatus;