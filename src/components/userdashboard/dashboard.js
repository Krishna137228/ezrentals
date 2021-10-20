import React, { useEffect } from "react";
import LeftMenu from './LeftMenu';
import RightView from './RightView';
import {getItems} from '../../service/ajax';
import { useSelector, useDispatch } from 'react-redux'
import {updateItems} from '../../features/itemData/itemDataSlice';
import { Grid,Container,Box } from "@material-ui/core";
function Dashboard(props) {

    const styles = (theme) => ({
        root: {
            flexGrow: 1
        }
      });

    const dispatch = useDispatch();

    var selectedCategories = useSelector((state) => state.userInput.selectedCategories);
    var sortBy = useSelector((state) => state.userInput.sortBy);
    var order = useSelector((state) => state.userInput.order);
    var position = useSelector((state) =>  state.userInfo.location)
      

    useEffect(() => {
        console.log("Component mount")
        getItemsToDisplay();
    }, [])

    function getItemsToDisplay() {

        console.log(selectedCategories);
        console.log(sortBy);
        console.log(order);
        console.log(position);

        let itemData = getItems();
        console.log(itemData)
    
        dispatch(updateItems({items: itemData}))
    }
    return (
        <div className={styles.root}>
            <Box>
                <Grid container >
                    <Grid  item xs={2}>
                        <LeftMenu />
                    </Grid>
                    <Grid  item xs={10}>
                        <RightView getItems={()=>getItemsToDisplay()} />
                    </Grid>
                </Grid>
                
            </Box>
        </div>
    );
}

export default Dashboard;