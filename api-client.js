const fetch = require("node-fetch");
let log = console.log;
log(`===== Fetching Data =====`);
  
 

let API_KEY = '?api_key=e82049bb0a7de665cc6d71a82d64666d&language=en-US';
  
const getData = async () => {
  const apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';
  try {
    let res = await fetch(`${apiUrl}${API_KEY}`);
    let uitslag = await res.json(); 
    log(uitslag);
    return uitslag;
  } catch(error) {
    //log(error);
  }
}
//getData();



const getMovies = async () => {
    const movies = await getData();
    log(movies);
    // movies.forEach((movie, index) => {
    //     output += `<li><button>${movie.name}</button></li>`;     
    // });
    // document.body.innerHTML = output;
}
getMovies();



//module.exports = getData;




