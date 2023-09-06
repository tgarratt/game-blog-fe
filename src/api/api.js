const getRecentGames = 'http://localhost:5000/api/games?sort[0]=createdAt:desc&pagination[limit]=2&populate=*';
const getPopularGames = 'http://localhost:5000/api/games?filters[popular][$eq]=True&pagination[limit]=2&populate=*';
const getCurrentFavouriteGame = 'http://localhost:5000/api/games?filters[currentFavourite][$eq]=True&pagination[limit]=1&populate=*';
const getSearchedGames = (query) => {
return `http://localhost:5000/api/games?filters[name][$contains]=${query}&populate=*`
};


export { getRecentGames, getPopularGames, getCurrentFavouriteGame, getSearchedGames }