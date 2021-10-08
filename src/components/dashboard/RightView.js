import React from "react";
import Iteminfo from "../ItemInfo";
import styles from '../../styles/rightview.module.scss';
import { Grid,Container, Button, Box } from "@material-ui/core";
import SortBy from '../SortBy';
function RightView(props) {
    
    return (
        <div className={styles.rightview}>
            <Container>
                <Box sx={{ display: 'flex',flexDirection: 'row-reverse' }}>
                    <SortBy />
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