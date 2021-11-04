import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from '../styles/sortBy.module.scss';
import { Grid,Box,Paper, Checkbox , FormGroup, FormControlLabel} from "@material-ui/core";


function DropDown(props) {
    const [selectedVal, setSelectedVal] = React.useState(props.value);
    let handleChange=(e) => {
        setSelectedVal(e.target.value)
        props.updateOption(e.target.value);
    }

    const options = props.options;
    
    return (
        <div >
            <FormControl size="small" fullWidth = {true} >
                        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedVal}
                        //defaultValue={props.defaultValue}
                        onChange={handleChange}
                        >
                            {Object.keys(options).map((key) => <MenuItem value={options[key]}>{key}</MenuItem>)}
                        
                        </Select>
                        
                    </FormControl>
        </div>
    );
}
export default DropDown;