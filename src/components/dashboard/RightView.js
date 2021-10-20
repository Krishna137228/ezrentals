import React from "react";
import Iteminfo from "../ItemInfo";
import styles from '../../styles/rightview.module.scss';
import { Grid,Container, Button, Box } from "@material-ui/core";
import DropDown from '../DropDown';
function RightView(props) {
    
    const sortBy = {
        'Price': 'price',
        'Distance': 'distance'
    };
    const sortOrder = {
        'ASC':'asc',
        'DESC':'desc'
    };

    let selectedSort = 'Price';
    let selectedOrder = 'ASC';

    function updateSortBy(newSortBy) {
        selectedSort = newSortBy;
    }
    function updateOrder(newOrder) {
        selectedOrder = newOrder;
    }
    return (
        <div className={styles.rightview}>
            <Container>
                <Box >
                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="center" spacing={2}>
                        <Grid item xs={1}>
                            <Button variant="contained">
                                Apply
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <DropDown label = {'Order'} value ={selectedOrder} defaultValue='asc' updateOption={updateOrder} options = {sortOrder} />
                        </Grid>
                        <Grid item xs={3}>
                            <DropDown label = {'Sort By'} value ={selectedSort} defaultValue='desc' updateOption={updateSortBy} options = {sortBy} />
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
                </Box>
               </Container>
        </div>
    );
}


export default RightView;