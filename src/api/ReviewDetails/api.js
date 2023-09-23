const getReviewDetails = (gameId) => {
return `http://localhost:5000/api/games/${gameId}?populate=*`
};

export { getReviewDetails }