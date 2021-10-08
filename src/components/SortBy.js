import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from '../styles/sortBy.module.scss';
import { Grid,Box,Paper, Checkbox , FormGroup, FormControlLabel} from "@material-ui/core";


function SortBy(props) {
    const [sortBy, setSortBy] = React.useState('');
    let handleChange=(e) => {
        setSortBy(e.target.value)
    }
    return (
        <div className = {styles.sortBy} >
            <FormControl size="small" fullWidth = {true} >
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sortBy}
                        label="Age"
                        onChange={handleChange}
                        >
                        <MenuItem value={'price'}>Price</MenuItem>
                        <MenuItem value={'distance'}>Distance</MenuItem>
                        </Select>
                        
                    </FormControl>
        </div>
    );
}
export default SortBy;