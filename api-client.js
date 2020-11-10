const fetch = require("node-fetch");
let log = console.log;
log(`===== Fetching Data =====`);
  
 

let API_KEY = '?api_key=e82049bb0a7de665cc6d71a82d64666d&language=en-US';
  
const getData = async () => {
    let output = '';
    const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';

    try {

    const res = await fetch(`${apiUrl}${API_KEY}`);
    const data = await res.json(); 
    log(data);

    } catch(error) {

    log(error);

    }

}
getData();


module.exports = getData;




