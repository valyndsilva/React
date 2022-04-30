export default function selectFilter({
  seriesItems,
  movieItems,
  // trendingAllItems,
  trendingMoviesItems,
  trendingTvItems,
  myListItems,
  // myTvListItems,
  // myMovieListItems,
  myWatchedListItems,
  // myTvWatchedListItems,
  // myMovieWatchedListItems,
  // mySearchItems,
  myTvSearchItems,
  myMovieSearchItems,
}) {
  return {
    // series: [
    //   {
    //     title: "Documentaries",
    //     data: series.filter((item) => item.genre === "documentaries"),
    //   },
    //   {
    //     title: "Comedies",
    //     data: series.filter((item) => item.genre === "comedies"),
    //   },
    //   {
    //     title: "Children",
    //     data: series.filter((item) => item.genre === "children"),
    //   },
    //   {
    //     title: "Crime",
    //     data: series.filter((item) => item.genre === "crime"),
    //   },
    //   {
    //     title: "Feel Good",
    //     data: series.filter((item) => item.genre === "feel-good"),
    //   },
    // ],
    // movie: [
    //   {
    //     title: "Drama",
    //     data: movie.filter((item) => item.genre === "drama"),
    //   },
    //   {
    //     title: "Thriller",
    //     data: movie.filter((item) => item.genre === "thriller"),
    //   },
    //   {
    //     title: "Children",
    //     data: movie.filter((item) => item.genre === "children"),
    //   },
    //   {
    //     title: "Suspense",
    //     data: movie.filter((item) => item.genre === "suspense"),
    //   },
    //   {
    //     title: "Romance",
    //     data: movie.filter((item) => item.genre === "romance"),
    //   },
    // ],
    home: [
      { title: "Series", data: seriesItems, type: "tv" },
      { title: "Movies", data: movieItems, type: "movie" },
      { title: "Trending Movies", data: trendingMoviesItems, type: "movie" },
      { title: "Trending Series", data: trendingTvItems, type: "tv" },
    ],
    series: [{ title: "Series", data: seriesItems, type: "tv" }],
    movies: [{ title: "Movies", data: movieItems, type: "movie" }],
    trending: [
      { title: "Trending Movies", data: trendingMoviesItems, type: "movie" },
      { title: "Trending Series", data: trendingTvItems, type: "tv" },
    ],
    myList: [
      {
        title: "My Watch List",
        data: myListItems,
        type: "tv/movie",
      },
      // { title: "My TV Watch List", data: myTvListItems, type: "tv" },
      // { title: "My Films Watch List", data: myMovieListItems, type: "movie" },
      { title: "My Watched List", data: myWatchedListItems, type: "tv/movie" },
      // { title: "My TV Watched List", data: myTvWatchedListItems, type: "tv" },
      // {
      //   title: "My Films Watched List",
      //   data: myMovieWatchedListItems,
      //   type: "movie",
      // },
    ],
    mySearch: [
      // { title: "All Search Results", data: mySearchItems, type: "tv" },
      { title: "TV Search Results", data: myTvSearchItems, type: "tv" },
      {
        title: "Films Search Results",
        data: myMovieSearchItems,
        type: "movie",
      },
    ],
  };
}
