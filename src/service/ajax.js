import axios from 'axios';
import {getSampleItems, getSampleUser} from '../sampleData';
const baseUrl = 'http://localhost:5000/easyren-329315/us-central1/api';

async function getCategories() {

    let url = baseUrl + '/categories';
    let res = await axios.get(url);

    return res.data;

}

async function sendEmail(buyerId, itemId) {
    let url = baseUrl + '/sendEmail?itemId=' +itemId  + '&buyerId=' + buyerId;

    let res = await axios.get(url);
    return res.data;
}

async function signup(payload) {
    let url = baseUrl + '/addUser';

    let userAdded = await axios.post(url, payload.userInfo)

    if (userAdded.data.error) {
        return userAdded.data.error;
    }

    let username = payload.userSecret.username;
    let password = payload.userSecret.password;

    let addLoginUrl = baseUrl + '/addLogin?username=' + username + '&secret=' + password;
    let userCredsAdded = await axios.get(addLoginUrl);
    return true;
}

async function  getItems(username, buyFlag, page, limit, selectedSort, selectedOrder) {

    console.log(selectedSort, selectedOrder);
    let url = baseUrl + '/items?username=' + username + '&buyFlag=' + buyFlag + '&page=' + page + '&limit=' + limit + '&sortBy=' + selectedSort + '&order=' + selectedOrder;
    
    let response = await axios.get(url);
    return response.data;
}

function uploadImage(file, itemId, onUploadProgress) {

    let formData = new FormData();

    formData.append("file", file);
    let url = baseUrl + '/uploadImage?itemId=' + itemId;

    return axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
 
}

async function addItem(item) {
    let url = baseUrl +  '/addItem';

    let resp =  await axios.post(url, item);
    return resp.status == 200 ? true : false;
}

async function login({username, password}) {
    
    let loginUrl = baseUrl + '/login?username=' + username + '&secret=' + password;

    let loginResp = await axios.get(loginUrl);

    if (loginResp.data.error) {
        return false;
    }

    let userInfoUrl = baseUrl + '/userInfo?username=' + username;
    let userInfo = await axios.get(userInfoUrl);

    return userInfo.data;


    // return getSampleUser();
    
}

export  {getCategories, login, signup, getItems, uploadImage, addItem,sendEmail};