import React, { useEffect, useState } from "react";
import Iteminfo from "../ItemInfo";


import Stack from '@mui/material/Stack';
import styles from '../../styles/rightview.module.scss';
import { Grid,Container,Button, Box, Modal,Switch, Typography} from "@material-ui/core";
import {updateSortBy, updateOrder, updateBuyFlag} from '../../features/userInputs/userInputSlice';
import { useSelector, useDispatch } from 'react-redux'
import DropDown from '../DropDown';
import ItemUpload from '../ItemUpload';
import ItemsGrid from './ItemsGrid';
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
    var buyFlag = useSelector((state) => state.userInput.buyFlag);
    

    function updateSortByFn(newSortBy) {
        dispatch(updateSortBy({sortBy: newSortBy}))
    }
    function updateOrderFn(newOrder) {
        dispatch(updateOrder({order: newOrder}))
    }

    function handleBuyFlag() {
        console.log('Buy Flag chagned')
        dispatch(updateBuyFlag({buyFlag: !buyFlag}));
    }

    // sell modal

    var [openItemUploadModal, setOpenUploadModal] = useState(false);
    function toggleSellItemModal() {
        setOpenUploadModal(!openItemUploadModal);
    }

    // // Item status modal
    // var [openItemStatusModal, setOpenItemStatusModal] = useState(false);
    // function toggleItemStatusModal() {
    //     setOpenItemStatusModal(!openItemStatusModal);
    // }


    return (
        <div className={styles.rightview}>
            <Container>
                <Box >
                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="center" spacing={2}>
                        <Grid item xs={1}>
                            <Button color="primary" variant="contained" onClick={(page, limit) => props.getItems(page, limit)}>
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
                                    <Typography>
                                        My Items
                                    </Typography>
                                    {/* <Button color="primary" variant="contained" onClick={() => toggleItemStatusModal()}>
                                        Status
                                    </Button> */}
                                    {/* <Modal open={openItemStatusModal} onClose={toggleItemStatusModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                        <ItemStatus handleClose={toggleItemStatusModal} />
                                    </Modal> */}
                                </Grid>
                                <Grid item xs={1}>
                                    <Switch color='primary' defaultChecked onChange={(e) => handleBuyFlag(e)}/>
                                </Grid>
                                <Grid item xs={2}>
                                        <Typography>
                                             Buy Items
                                        </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Box>
                <Box>
                    <ItemsGrid getItems={( page, limit)=>props.getItems( page, limit)}/>
                </Box>
               </Container>
        </div>
    );
}


export default RightView;