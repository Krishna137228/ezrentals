import React, { useEffect, useState } from "react";
import Iteminfo from "../ItemInfo";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from '../../styles/rightview.module.scss';
import { Grid,Container,Button, Box, Modal} from "@material-ui/core";
import {updateSortBy, updateOrder} from '../../features/userInputs/userInputSlice';
import { useSelector, useDispatch } from 'react-redux'
import DropDown from '../DropDown';
import ItemUpload from '../ItemUpload';
import ItemStatus from '../ItemStatus';
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

    // order, sortby, items

    var sortBy = useSelector((state) => state.userInput.sortBy);
    var order = useSelector((state) => state.userInput.order);
    var items = useSelector((state) => state.itemData.items);
    console.log(items);

    function updateSortByFn(newSortBy) {
        dispatch(updateSortBy({sortBy: newSortBy}))
    }
    function updateOrderFn(newOrder) {
        dispatch(updateOrder({order: newOrder}))
    }

    // sell modal

    var [openItemUploadModal, setOpenUploadModal] = useState(false);
    function toggleSellItemModal() {
        setOpenUploadModal(!openItemUploadModal);
    }

    // Item status modal
    var [openItemStatusModal, setOpenItemStatusModal] = useState(false);
    function toggleItemStatusModal() {
        setOpenItemStatusModal(!openItemStatusModal);
    }

    return (
        <div className={styles.rightview}>
            <Container>
                <Box >
                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="center" spacing={2}>
                        <Grid item xs={1}>
                            <Button color="primary" variant="contained" onClick={() => props.getItems()}>
                                Apply
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <DropDown label = {'Order'} value ={order} updateOption={updateOrderFn} options = {orderOptions} />
                        </Grid>
                        <Grid item xs={3}>
                            <DropDown label = {'Sort By'} value ={sortBy} updateOption={updateSortByFn} options = {sortByOptions} />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                <Grid item xs={3}>
                                    <Button color="primary" variant="contained" onClick={() => toggleSellItemModal()}>
                                        Sell Item
                                    </Button>
                                    <Modal open={openItemUploadModal} onClose={toggleSellItemModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                        <ItemUpload handleClose={toggleSellItemModal} />
                                    </Modal>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button color="primary" variant="contained" onClick={() => toggleItemStatusModal()}>
                                        Status
                                    </Button>
                                    <Modal open={openItemStatusModal} onClose={toggleItemStatusModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                        <ItemStatus handleClose={toggleItemStatusModal} />
                                    </Modal>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={3} > 
                        { items.map(item => {
                            return <Grid item xs={4}> 
                                <Iteminfo {...item}/>
                            </Grid>
                        }) }
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