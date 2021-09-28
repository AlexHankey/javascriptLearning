// TODO: define addFavoriteGame(..) function
function addFavoriteGame(gameName) {
    if(!gameName.includes("Call")) {
        favoriteGames.push(gameName);
    }
}

// TODO: define printFavoriteGames() function
function printFavoriteGames() {
    console.log(`Favorite games: ${favoriteGames.length}`);
    for( gameName of favoriteGames) {
        console.log(gameName);
    }
}

var favoriteGames = [];

addFavoriteGame("Call of duty");
addFavoriteGame("The last of us");
addFavoriteGame("God of War");
addFavoriteGame("Neir Automata");
addFavoriteGame("Battlefield");

// TODO: print out favorite Game
printFavoriteGames();