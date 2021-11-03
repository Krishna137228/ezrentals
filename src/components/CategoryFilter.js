import {React, useEffect,useState} from "react";
import { getCategories } from "../service/ajax";
import { useSelector, useDispatch } from 'react-redux'
import {updateCategories} from '../features/userInputs/userInputSlice';
import { Grid,Box,Paper, Checkbox , FormGroup, FormControlLabel} from "@material-ui/core";


function CategoryFilter(props) {

    const dispatch = useDispatch();

    let [cats, setCats] = useState([]);
    let selectedCats = useSelector((state) => state.userInput.categories);

    useEffect(() => {
        getCategories().then(categories => {
            let catList = []
            categories.forEach(cat => {
                catList.push(cat.category);
            });
            setCats(catList);
            // setSelectedCats(catList);
            dispatch(updateCategories({'categories': catList}))
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
        dispatch(updateCategories({'categories': selectedCats}))
        console.log(e.target.value);
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