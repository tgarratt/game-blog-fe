const getAllGames = (orderDir, filterCategories, filterName) => {
    const generateFilters = () => {
        let categoryFilters = '';
        filterCategories.map((category, key) => {
            categoryFilters = categoryFilters + `&filters[$and][${key + 1}][categories][name][$eq]=${category}`
        })
        return categoryFilters
    }

    return `http://localhost:5000/api/games?sort[0]=${orderDir}&filters[$and][0][name][$contains]=${filterName}${generateFilters()}&populate=*`
};




export { getAllGames }