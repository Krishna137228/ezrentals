import axios from 'axios';

const baseUrl = 'http://localhost:8080';

async function getCategories() {

    let url = baseUrl + '/getCategories';


}

async function getItems() {

    let url = baseUrl + '/getItems';
    
}

async function signUp() {

    let url = baseUrl + '/signup';
    
}


function login({username, password}) {
    
    let url = baseUrl + '/login';
    return {'userName': 'kp'};
}

export  {getCategories, login};