import {React, useEffect,useState} from "react";
import { getCategories } from "../service/ajax";
import {sortData} from "../service/datahelper";
import { useSelector, useDispatch } from 'react-redux'
import {updateCategories, updateSelectedCategories, updateCategoryOptions} from '../features/userInputs/userInputSlice';
import {updateEffItems} from '../features/itemData/itemDataSlice';
import { Grid,Box,Paper, Checkbox , FormGroup, FormControlLabel} from "@material-ui/core";


function CategoryFilter(props) {

    const dispatch = useDispatch();

    let [cats, setCats] = useState([]);
    let selectedCats = useSelector((state) => state.userInput.selectedCategories);
    let allItems = useSelector((state) => state.itemData.items);
    let sortBy = useSelector((state) => state.userInput.sortBy);
    let order = useSelector((state) => state.userInput.order);
    let location = useSelector((state) => state.userInfo.location);

    useEffect(() => {
        getCategories().then(categories => {
            let catList = []
            categories.forEach(cat => {
                catList.push(cat.category);
            });
            let catOptions = {};
            categories.forEach(cat => {
                catOptions[cat.category] = cat.category
            })
            setCats(catList);
            dispatch(updateCategoryOptions({'categoryOptions': catOptions}))
            dispatch(updateCategories({'categories': categories}));
            dispatch(updateSelectedCategories({'selectedCategories': catList}));
        })
        
    },[])

    function handleCat(e) {

        let value = e.target.value;

        if (e.target.checked) {
            // add to selectedCats
            selectedCats = [value, ...selectedCats]
        } else {
             // remove from selectedCats
             selectedCats = selectedCats.filter(item => item !== value)
        }
        // TODO update eff Items as well  
        
        
        let effItems = allItems.filter(item => selectedCats.includes(item.category))
        let sortedItems = sortData(effItems, sortBy, order, location);
        // console.log(sortedItems);
            // TODO add sort function 
            dispatch(updateEffItems({'effItems': sortedItems}));
            dispatch(updateCategories({'categories': selectedCats}))

        //console.log(e.target.value);
    }
    
    
    return (
        <Paper>
            <Box>
                <p>Select Categories</p>
            </Box>
            
            <Box>
            <FormGroup>
                { cats.map((cat) => 
                    <FormControlLabel  control={<Checkbox  color="primary" onChange={e=>handleCat(e)} value={cat} defaultChecked/>} label={cat} /> 
                        
            )}
            </FormGroup>
            </Box>
             
        </Paper>
    );
}
export default CategoryFilter;