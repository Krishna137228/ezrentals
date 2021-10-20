import axios from 'axios';
import {getSampleItems, getSampleUser} from '../sampleData';
const baseUrl = 'http://localhost:8080';

async function getCategories() {

    let url = baseUrl + '/getCategories';


}

async function signup() {
    let url = baseUrl + '/signup';
    return true;
}

async function getItems() {

    let url = baseUrl + '/getItems';
    return getSampleItems();
    
}



function login({username, password}) {
    
    let url = baseUrl + '/login';

    // downloadFile();
    return getSampleUser();
    
}

export  {getCategories, login, signup};