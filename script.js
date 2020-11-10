let log = console.log;
log(`*******************************`);

const getData = require("./api-client");

const getMovieList = async () => {
    const movieList = await getData;
    log(movieList);
}
getMovieList();
