import React, { useEffect, useState } from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Grid,Typography,TextField,Button, Box, ListItem, withStyles  } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import imageCompression from 'browser-image-compression';
import {uuid} from "uuidv4";
import {uploadImage, addItem} from '../service/ajax';
import DropDown from '../components/DropDown';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";

function ItemUpload(props) {

    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        console.log(latLng)
      };


    const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 15,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: "#EEEEEE",
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
    }))(LinearProgress);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      var curUser = useSelector((state) => state.userInfo.username);

      const categoryOptions = useSelector((state) => state.userInput.categoryOptions )

      var [itemId, setItemId] = useState(uuid())
      var [itemName, setItemName] = useState('');
      var [itemDescription, setItemDescription] = useState('');
      var [category, setCategory] = useState('');
      var [price, setPrice] = useState(0);
      var [rent, setRent] = useState(0);
      var [sellerMobileNbr, setSellerMobileNbr] = useState(useSelector((state) => state.userInfo.mobileNumber));
      var [sellerEmail, setSellerEmail] = useState(useSelector((state) => state.userInfo.emailId));


      var [currentFile, setCurrentFile] = useState(undefined);
      var [previewImage, setPreviewImage] = useState(undefined);
      var [progress, setProgress] = useState(0);
      var [message, setMessage] = useState("");
      var [isError, setIsError] = useState(false);
      var [imageInfos, setImageInfos] = useState([]);


      async function selectFile(event) {

        let imageFile = event.target.files[0];
        
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: '300',
            useWebWorker: true
          }
          
          try {
            const compressedFile = await imageCompression(imageFile, options);
            setPreviewImage(URL.createObjectURL(compressedFile));
            setCurrentFile(compressedFile);
            console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
  
            const uploadResp = await uploadImage(compressedFile, itemId, 
                (event) => {
                    setProgress(Math.round((100 * event.loaded) / event.total))
                });
          } catch (error) {
              setProgress(0);
              setCurrentFile(null);
              setPreviewImage(null)
            console.log(error);
            alert('image upload failed, try again');
          }
      }

      async function uploadItem() {
        if (itemId == '' || itemName == '' || itemDescription == '' || category == '' || price == 0 || sellerMobileNbr == '' ||
        sellerEmail == '' || previewImage == undefined || address == '' ) {
                    alert('Please fill all mandatory fields');
                    return;
            }
        
        const res = await addItem({
            'itemId': itemId,
            'itemName': itemName,
            'itemDescription': itemDescription,
            'category': category,
            'price': price,
            'rent': rent,
            'contacted': 0,
            'isSold': false,
            'coordinates': coordinates,
            'address': address,
            'uploadedBy': curUser,
            'sellerMobileNbr': sellerMobileNbr,
            'sellerEmail': sellerEmail
        });
        if (res == true) {
            props.handleClose()
        }
      }

    return (
    
        <Box sx={style}>
            <Grid container spacing={2}>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography id="modal-modal-title" variant="h5" component="h2">
                                Enter Item Details
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField required fullWidth defaultValue={itemName} label="Item Name" name="itemName" size="small" variant="outlined" onChange = {(e) => setItemName(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth defaultValue={itemDescription} label="Item Description" name="itemDescription" size="small" variant="outlined" onChange = {(e) => setItemDescription(e.target.value)} />
                                </Grid>
                                <Grid item xs={4}>
                                <label htmlFor="btn-upload">
                                    <input
                                        id="btn-upload"
                                        name="btn-upload"
                                        style={{ display: 'none' }}
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => selectFile(e)} />
                                    <Button
                                        className="btn-choose"
                                        variant="outlined"
                                        component="span" >
                                        Choose Image
                                    </Button>
                                </label>
                                

                                </Grid>
                                <Grid item xs={8}>
                                {previewImage && (
                                        <div>
                                            <img className="preview my20" src={previewImage} alt="" />
                                        </div>
                                    )}
                                <div className="file-name">
                                        {currentFile ? currentFile.name : null}
                                    </div>
                                    {currentFile && (
                                        <Box className="my20" display="flex" alignItems="center">
                                            <Box width="100%" mr={1}>
                                            <BorderLinearProgress variant="determinate" value={progress} />
                                            </Box>
                                            <Box minWidth={35}>
                                            <Typography variant="body2" color="textSecondary">{`${progress}%`}</Typography>
                                            </Box>
                                        </Box>)
                                    }
                                
                                </Grid>
                                
                                <Grid item xs={6}>
                                    <TextField required fullWidth defaultValue={price} label="Price" name="price" size="small" variant="outlined" onChange = {(e) => setPrice(e.target.value)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField required fullWidth defaultValue={rent} label="Rent per day" name="rent" size="small" variant="outlined" onChange = {(e) => setRent(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <DropDown label = {'Category'} value ={category} updateOption={(cat) => setCategory(cat)} options = {categoryOptions} />
                                    {/* <TextField required fullWidth defaultValue={category} label="Category" name="category" size="small" variant="outlined" onChange = {(e) => setCategory(e.target.value)} /> */}
                                </Grid>

                                <Grid item xs={12}>
                                    <PlacesAutocomplete value={address}  onChange={setAddress} onSelect={handleSelect}>
      
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <>
                                    <TextField required label="Address" name="address" fullWidth variant="outlined"  size="small" {...getInputProps({ placeholder: "Type address" })} />
                                    <div>
                                    {loading ? <div>...loading</div> : null}

                                    {suggestions.map(suggestion => {
                                        const style = {
                                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                        };

                                        return (
                                        <div {...getSuggestionItemProps(suggestion, { style })}>
                                            {suggestion.description}
                                        </div>
                                        );
                                    })}
                                    </div>
                                </>
                                )}
                            </PlacesAutocomplete>
                                </Grid>
                        
                                <Grid item xs={12}>
                                    <TextField required fullWidth defaultValue={sellerMobileNbr} label="Mobile Nbr" name="itemName" size="small" variant="outlined" onChange = {(e) => setSellerMobileNbr(e.target.value)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField required fullWidth defaultValue={sellerEmail} label="Email Id" name="itemName" size="small" variant="outlined" onChange = {(e) => setSellerEmail(e.target.value)} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="row-reverse" justifyContent="flex-start" alignItems="center" spacing={2}>
                        <Grid item>
                            <Button  variant="outlined" onClick={() => props.handleClose()}>Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button color="primary" variant="contained" onClick={() => uploadItem()}>Upload</Button>
                        </Grid>
                    </Grid>
            
                </Grid>
            
            </Grid>
           
           
        </Box>
    );
}

export default ItemUpload;