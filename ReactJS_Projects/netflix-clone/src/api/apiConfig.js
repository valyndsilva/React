const apiConfig = {
  baseURL: "https://api.themoviedb.org/3",
  basePlayerURL: "https://www.2embed.ru/embed/tmdb/",
  apiKey: process.env.REACT_APP_MOVIE_API_KEY,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  w300Image: (imgPath) => `https://image.tmdb.org/t/p/w300/${imgPath}`,
  unavailablePortrait: "/images/misc/unavailablePortait.jpeg",
  unavailableLandscape: "/images/misc/unavailableLandscape.png",
  noPicture: "/images/misc/noPicture.jpeg",
};

export default apiConfig;
