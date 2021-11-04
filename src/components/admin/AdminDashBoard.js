import {React, useEffect,useState} from "react";
import { getCategories, addCategory } from "../../service/ajax";
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/admindashboard.module.scss';
import { Grid,Box,Button } from "@material-ui/core";
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@material-ui/core/TextField';


function AdminDashBoard(props) {


    var [rows, setRows] = useState([]);

    function updateTable() {
        getCategories().then(categories => {
            setRows(categories);
        })
    }
    useEffect(() => {
        updateTable();
    },[])
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'category', headerName: 'Category Name', width: 200}
    ]

    var [id, setId] = useState('');
    var [category, setCategory] = useState('');

    async function addNewCat(e) {
        if(id != '' && category != '') {
            let res = await addCategory(id, category);
            alert(res);
            updateTable()
        } else {
            alert('Enter id and category name');
        }
    }
    return (<Box className={styles.admin} maxWidth="s">
        <Grid container spacing={3}>
              <Grid item xs={5}>
                  <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        
                        />
                    </div>
                
              </Grid>
              <Grid item xs={7}>
                  
                <Grid container spacing={3}>
                    <Grid xs={3} item>
                        <TextField required fullWidth defaultValue={id} label="Category ID" name="id" size="small" variant="outlined" onChange = {(e) => setId(e.target.value)} />
                    </Grid>
                    <Grid xs={3} item>
                        <TextField required fullWidth defaultValue={category} label="Category Name" name="name" size="small" variant="outlined" onChange = {(e) => setCategory(e.target.value)} />
                    </Grid>
                    <Grid xs={3} item>
                        <Button color="primary" onClick={(e) => addNewCat(e)} fullWidth type="submit" variant="contained">
                            Add Category 
                        </Button>
                    </Grid>
                </Grid>
                
              </Grid>
        </Grid>
    </Box>);
}

export default AdminDashBoard;