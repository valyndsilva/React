import React, { useContext } from "react";
import BrowseContainer from "../containers/browse";
import TmdbContext from "../context/TmdbContext";
import selectFilter from "../utils/selectFilter";
export default function Browse() {
  const {
    movieItems,
    seriesItems,
    trendingAllItems,
    trendingMoviesItems,
    trendingTvItems,
    myListItems,
    myTvListItems,
    myMovieListItems,
    // mySearchItems,
    myTvSearchItems,
    myMovieSearchItems,
    myWatchedListItems,
    myTvWatchedListItems,
    myMovieWatchedListItems,
  } = useContext(TmdbContext);

  // // Get films
  // console.log("Browse page movies", movieItems);
  // // Get series
  // console.log("Browse page series", seriesItems);
  // // Get trending
  // console.log("Browse page trending", trendingAllItems);
  // // Get trending movies
  // console.log("Browse page trending movies", trendingMoviesItems);
  // // Get trending series
  // console.log("Browse page trending series", trendingTvItems);

  // Get slides
  const slides = selectFilter({
    seriesItems,
    movieItems,
    trendingAllItems,
    trendingMoviesItems,
    trendingTvItems,
    myListItems,
    myTvListItems,
    myMovieListItems,
    myWatchedListItems,
    myTvWatchedListItems,
    myMovieWatchedListItems,
    // mySearchItems,
    myTvSearchItems,
    myMovieSearchItems,
  });
  // console.log(slides);

  // pass to browse container

  return <BrowseContainer slides={slides} />;
}
