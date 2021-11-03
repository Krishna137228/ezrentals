import {React, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid} from "@material-ui/core";
import Pagination from '@mui/material/Pagination';
import Iteminfo  from '../ItemInfo';

function ItemsGrid(props) {

    const limit = 6;
    var [page, setPage] = useState(1);
    var buyFlag = useSelector((state) => state.userInput.buyFlag);

    const handlePageChange = (event, value) => {
      setPage(value);
      props.getItems(value, limit);
    };

    var items = useSelector((state) => state.itemData.items);
    console.log(items);

    
    useEffect(() => {
        setPage(1);
        props.getItems( 1, limit);
    }, [buyFlag])


    useEffect(() => {
        console.log("Component mount")
        props.getItems( page, limit);
    }, [])
    return (
        <>
        <Grid container spacing={3} > 
                        { items.map(item => {
                            return <Grid item xs={4}> 
                                <Iteminfo buyFlag = {buyFlag} {...item}/>
                            </Grid>
                        }) }
                    </Grid>
                    <Grid container spacing={3} direction="row-reverse" justifyContent="flex-start" alignItems="center" >
                        <Grid item>
                            <Pagination count={10}  page={page} onChange={handlePageChange} />
                        </Grid>
            </Grid>
        </>
    );


}
export default ItemsGrid;