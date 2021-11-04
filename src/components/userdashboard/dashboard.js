import React, { useEffect } from "react";
import LeftMenu from './LeftMenu';
import RightView from './RightView';
import {getItems} from '../../service/ajax';
import { sortData} from '../../service/datahelper';
import { useSelector, useDispatch } from 'react-redux'
import {updateEffItems, updateItems} from '../../features/itemData/itemDataSlice';
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
    var username = useSelector((state) => state.userInfo.username);
    var buyFlag = useSelector((state) => state.userInput.buyFlag);
    var location = useSelector((state) =>  state.userInfo.location);
      

    function getItemsToDisplay(page, limit) {

        console.log(buyFlag)
        console.log(selectedCategories);
        console.log(sortBy);
        console.log(order);
        console.log(location);
        console.log(page);
        console.log(limit);

        getItems(username, buyFlag, page, limit, sortBy, order).then(itemData => {

            dispatch(updateItems({items: itemData}))
            // TODO update eff Items as well
            
            let effItems = selectedCategories.length > 0 ? itemData.filter(item => selectedCategories.includes(item.category)) : itemData;
            let sortedItems = sortData(effItems, sortBy, order,location);
            dispatch(updateEffItems({effItems: sortedItems}))

            
        })
       
    }
    return (
        <div className={styles.root}>
            <Box>
                <Grid container >
                    <Grid  item xs={2}>
                        <LeftMenu />
                    </Grid>
                    <Grid  item xs={10}>
                        <RightView getItems={( page, limit)=>getItemsToDisplay( page, limit)} />
                    </Grid>
                </Grid>
                
            </Box>
        </div>
    );
}

export default Dashboard;