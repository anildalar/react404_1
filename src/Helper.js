//const BASE_URL = 'http://127.0.0.1:1337';//Local Address
const BASE_URL = 'https://radiant-atoll-79245.herokuapp.com';//Local Address
const TOKEN = '9a2170e818ed120001ccde8e0bdacabcf9aa0cbec4da0a5fafa6ba0f72833a27b5f2aa362c875721c481b601707bff694ee1cc1efdc100483f5705c82ba777e90da38a04386a2ed0d79e8a85316bfd8e6e81047cf7982465c3d1ca5a72a18a20d24fef10ad7feaf20089b1a47aeff2a64504568061970b1bed0c0eea79e9e487';
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



