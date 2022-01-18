//const BASE_URL = 'http://127.0.0.1:1337';//Local Address
const BASE_URL = 'https://radiant-atoll-79245.herokuapp.com';//Local Address
const TOKEN = '3b17866ce62368f669962a3a3a6d142cb728f123df707c4f2891914e6b58a579ba9aa28c6fb463e2622e319b0cb91910cdf591752a2dbc4c46131bc69389f9c6a543fdc2afab22eb9ac2eb243c8690037d04701f9872dac815b8a2c6a11afa004999261c573ac4e657e5e57d4a887271299565ac7cea971a9ea58b2c5fd3428c';
//const base_url = 'https://radiant-atoll-79245.herokuapp.com';//Local Address
let headers = {
    'Authorization':'Bearer '+TOKEN,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    
  };
// How to export you data in nodejs

//1. Default Export 

//2. Named Export

module.exports = { BASE_URL, TOKEN,headers }



