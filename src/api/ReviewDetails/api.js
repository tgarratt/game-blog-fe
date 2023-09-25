const getReviewDetails = (gameId) => {
return `${process.env.REACT_APP_API_URL}/api/games/${gameId}?populate=*`
};

export { getReviewDetails }