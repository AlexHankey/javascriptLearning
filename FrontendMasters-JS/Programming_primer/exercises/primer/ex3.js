// TODO: define addFavoriteGame(..) function
function addFavouriteCity(cityName) {
    if(!cityName.includes("London")) {
        favouriteCity.push(cityName);
    }
}

// TODO: define printFavoriteGames() function
function printFavouriteCity() {
    console.log(`Number of cities: ${favouriteCity.length}`);
    for( cityName of favouriteCity) {
        console.log(cityName);
    }
}

var favouriteCity = [];

addFavouriteCity("London");
addFavouriteCity("Manchester");
addFavouriteCity("Leeds");
addFavouriteCity("Glascow");
addFavouriteCity("Stockport");
addFavouriteCity("Cornwall");


// TODO: print out favorite Game
printFavouriteCity();