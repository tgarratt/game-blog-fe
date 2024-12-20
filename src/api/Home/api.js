const getRecentGames = `${process.env.REACT_APP_API_URL}/api/games?sort[0]=createdAt:desc&pagination[limit]=4&populate=*`;

const getPopularGames = `${process.env.REACT_APP_API_URL}/api/games?filters[popular][$eq]=True&pagination[limit]=2&populate=*`;

const getCurrentFavouriteGame = `${process.env.REACT_APP_API_URL}/api/games?filters[currentFavourite][$eq]=True&pagination[limit]=1&populate=*`;

const getSearchedGames = (searchName, searchCategories) => {

    const generateFilters = () => {
        let categoryFilters = '';
        searchCategories.map((category, key) => (
            categoryFilters = categoryFilters + `&filters[$and][${key + 1}][categories][name][$eq]=${category}`
        ))
        return categoryFilters
    }

return `${process.env.REACT_APP_API_URL}/api/games?filters[$and][0][name][$containsi]=${searchName}${generateFilters()}&populate=*`
};


export { getRecentGames, getPopularGames, getCurrentFavouriteGame, getSearchedGames }