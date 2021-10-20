import React, { useEffect } from "react";
import Iteminfo from "../ItemInfo";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from '../../styles/rightview.module.scss';
import { Grid,Container,Button, Box } from "@material-ui/core";
import {updateSortBy, updateOrder} from '../../features/userInputs/userInputSlice';
import { useSelector, useDispatch } from 'react-redux'
import DropDown from '../DropDown';
function RightView(props) {
    
    const sortByOptions = {
        'Price': 'price',
        'Distance': 'distance'
    };
    const orderOptions = {
        'ASC':'asc',
        'DESC':'desc'
    };

    const dispatch = useDispatch();


    var sortBy = useSelector((state) => state.userInput.sortBy);
    var order = useSelector((state) => state.userInput.order);

    var items = useSelector((state) => state.itemData.sortBy);
    console.log(items);

    function updateSortByFn(newSortBy) {
        dispatch(updateSortBy({sortBy: newSortBy}))
    }
    function updateOrderFn(newOrder) {
        dispatch(updateOrder({order: newOrder}))
    }

    return (
        <div className={styles.rightview}>
            <Container>
                <Box >
                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="center" spacing={2}>
                        <Grid item xs={1}>
                            <Button variant="contained" onClick={() => props.getItems()}>
                                Apply
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <DropDown label = {'Order'} value ={order} updateOption={updateOrderFn} options = {orderOptions} />
                        </Grid>
                        <Grid item xs={3}>
                            <DropDown label = {'Sort By'} value ={sortBy} updateOption={updateSortByFn} options = {sortByOptions} />
                        </Grid>
                        
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={3} >
                        <Grid  item xs={4}>
                            <Iteminfo />
                        </Grid>
                        <Grid  item xs={4}>
                            <Iteminfo />
                        </Grid>
                        <Grid  item xs={4}>
                            <Iteminfo />
                        </Grid>
                        <Grid  item xs={4}>
                            <Iteminfo />
                        </Grid>
                        <Grid  item xs={4}>
                            <Iteminfo />
                        </Grid>
                        <Grid  item xs={4}>
                            <Iteminfo />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} direction="row-reverse" justifyContent="flex-start" alignItems="center" >
                        <Grid item>
                            <Pagination count={10} />
                        </Grid>
                    </Grid>
                </Box>
               </Container>
        </div>
    );
}


export default RightView;