// TODO: define addFavoriteGame(..) function
function addFavoriteGame(gameName) {
    if(!gameName.includes("Among")) {
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
addFavoriteGame("Among Us");

// TODO: print out favorite Game
printFavoriteGames();