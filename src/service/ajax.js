import axios from 'axios';

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
    
}



function login({username, password}) {
    
    let url = baseUrl + '/login';
    return {'userName': 'kp'};
}

export  {getCategories, login, signup};