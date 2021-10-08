import React from "react";
import { Grid,Box,Paper, Checkbox , FormGroup, FormControlLabel} from "@material-ui/core";


function CategoryFilter(props) {
    const cats = ['Cat1', 'Cat2', 'Cat3']
    return (
        <Paper>
            <Box>
                <p>Select Categories</p>
            </Box>
            
            <Box>
            <FormGroup>
                { cats.map((cat) => 
                    <FormControlLabel  control={<Checkbox  color="primary"  defaultChecked/>} label={cat} /> 
                        
            )}
            </FormGroup>
            </Box>
             
        </Paper>
    );
}
export default CategoryFilter;