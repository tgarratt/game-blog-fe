const getRecentGames = 'http://localhost:5000/api/games?sort[0]=createdAt:desc&pagination[limit]=2';
const getPopularGames = 'http://localhost:5000/api/games?filters[popular][$eq]=True&pagination[limit]=2';
const getCurrentFavouriteGame = 'http://localhost:5000/api/games?filters[currentFavourite][$eq]=True&pagination[limit]=1';
const getSearchedGames = (query) => {
return `http://localhost:5000/api/games?filters[name][$contains]=${query}`
};

export { getRecentGames, getPopularGames, getCurrentFavouriteGame, getSearchedGames }