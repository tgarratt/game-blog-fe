const getRecentGames = 'http://localhost:5000/api/games?sort[0]=createdAt:desc&pagination[limit]=2&populate=*';

const getPopularGames = 'http://localhost:5000/api/games?filters[popular][$eq]=True&pagination[limit]=2&populate=*';

const getCurrentFavouriteGame = 'http://localhost:5000/api/games?filters[currentFavourite][$eq]=True&pagination[limit]=1&populate=*';

const getSearchedGames = (searchName, searchCategories) => {

    const generateFilters = () => {
        let categoryFilters = '';
        searchCategories.map((category, key) => {
            categoryFilters = categoryFilters + `&filters[$and][${key + 1}][categories][name][$eq]=${category}`
        })
        return categoryFilters
    }

return `http://localhost:5000/api/games?filters[$and][0][name][$contains]=${searchName}${generateFilters()}&populate=*`
};


export { getRecentGames, getPopularGames, getCurrentFavouriteGame, getSearchedGames }