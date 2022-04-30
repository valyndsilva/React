import React, { createContext, useState, useEffect } from "react";
import tmdbApi, { category, media_type, time_window } from "../api/tmdbApi";
import YouTube from "react-youtube";

const TmdbContext = createContext({});

export const TmdbProvider = ({ children }) => {
  // const { fetchStreamingVideo } = useContext(PlayerContext);
  const [isHovered, setIsHovered] = useState(false);
  const [slideRows, setSlideRows] = useState([]);
  const [itemId, setItemId] = useState(null);
  const [genreId, setGenreId] = useState({});
  const [mediaTypeData, setMediaTypeData] = useState(null);

  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);
  const [filteredGenres, setFilteredGenres] = useState({});

  const [trailerData, setTrailerData] = useState({});
  const [genreData, setGenreData] = useState({});
  const [creditsData, setCreditsData] = useState({});
  const [similarData, setSimilarData] = useState([]);
  // const [ratingsData, setRatingsData] = useState({});
  const [numOfSeasons, setNumOfSeasons] = useState([]);
  const [seasonsData, setSeasonsData] = useState([]);
  const [seasonNo, setSeasonNo] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);
  const [episodeNo, setEpisodeNo] = useState([]);

  const [movieItems, setMovieItems] = useState([]);
  const [seriesItems, setSeriesItems] = useState([]);
  const [trendingAllItems, setTrendingAllItems] = useState([]);
  const [trendingMoviesItems, setTrendingMoviesItems] = useState([]);
  const [trendingTvItems, setTrendingTvItems] = useState([]);
  const [myListItems, setMyListItems] = useState([]);
  const [myTvListItems, setMyTvListItems] = useState([]);
  const [myMovieListItems, setMyMovieListItems] = useState([]);
  const [myWatchedListItems, setMyWatchedListItems] = useState([]);
  const [myTvWatchedListItems, setMyTvWatchedListItems] = useState([]);
  const [myMovieWatchedListItems, setMyMovieWatchedListItems] = useState([]);
  // const [mySearchItems, setMySearchItems] = useState([]);
  const [myTvSearchItems, setMyTvSearchItems] = useState([]);
  const [myMovieSearchItems, setMyMovieSearchItems] = useState([]);

  const [videoKey, setVideoKey] = useState(null);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  // Search
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const getGenres = async () => {
    const params = {
      language: "en-US",
    };
    // Get Movie Genres List
    const resMovie = await tmdbApi.getGenresList(category.movie, {
      params,
    });
    const getMovieGenres = resMovie.data.genres;
    // console.log("getMovieGenres", getMovieGenres);
    setMovieGenres(getMovieGenres);

    // Get Tv Genres List
    const resTv = await tmdbApi.getGenresList(category.tv, {
      params,
    });
    const getTvGenres = resTv.data.genres;
    // console.log("getTvGenres", getTvGenres);
    setTvGenres(getTvGenres);

    // Combined Movie and Tv Genres List
    const concatGenres = getMovieGenres.concat(getTvGenres);
    // console.log("concatGenres:", concatGenres);

    // Remove Duplicates from the Combined Movie / Tv Genres List
    const filteredGenres = [
      ...new Map(
        concatGenres.map((v) => [JSON.stringify([v.id, v.name]), v])
      ).values(),
    ];
    // console.log("filteredGenres:", filteredGenres);
    setFilteredGenres(filteredGenres);
  };

  useEffect(() => {
    getGenres();
    // eslint-disable-next-line
  }, []);

  // console.log("itemId:", itemId);

  const fetchDetail = async (mediaType, itemId) => {
    console.log("fetchDetail mediaType:", mediaType);
    console.log("fetchDetail itemId:", itemId);
    const params = {
      append_to_response: "videos",
    };
    const res = await tmdbApi.getDetail(mediaType, itemId, {
      params,
    });
    const resData = res.data;
    // console.log("fetchDetail resData", resData);
    setTrailerData(resData);
    setItemId(resData.id);

    //Get Tv Shows Number of Seasons
    if (mediaType === "tv") {
      console.log("This is a tv show type!");
      // console.log("Total No. of Seasons:", resData.number_of_seasons);
      setNumOfSeasons(resData.number_of_seasons);
      // console.log("Seasons:", resData.seasons);
      setSeasonsData(resData.seasons);
      // let seasonNo = [];
      resData.seasons.map((el) => {
        // console.log("TV Show ID:", el.id);
        // console.log("Season No:", el.season_number);
        // console.log("Season Name:", el.name);
        setSeasonNo(el.season_number);
        fetchSeasonDetails(mediaType, el.id, el.season_number);
        return el;
      });
    } else {
      console.log("This is a movie type!");
    }

    // Get Genres in Content Modal
    const genresArr = resData.genres.map((item) => item.name);
    // console.log("genresArr ", genresArr);
    const genresList = Array.from(genresArr.values()).join(", ");
    // console.log("genresList:", genresList);
    setGenreData(genresList);
  };

  const fetchSeasonDetails = async (mediaType, itemId, seasonNo) => {
    // console.log("Season No:", seasonNo);
    const params = {
      append_to_response: "videos",
    };
    const res = await tmdbApi.getSeasonDetails(mediaType, itemId, seasonNo, {
      params,
    });
    // console.log("fetchSeasonDetail res", res);
    const resData = res.data;
    // console.log("fetchSeasonDetail resData", resData);
    // console.log("fetchSeasonDetail itemId:", resData.id);

    // if (mediaType === "tv") {
    // console.log("Episodes:", resData.episodes);
    setEpisodesData(resData.episodes);

    // resData.seasons.forEach((el) => {
    //   console.log("TV Show ID:", el.id);
    //   console.log("Season No:", el.season_number);
    //   console.log("Season Name:", el.name);
    //   console.log("Episode No:", el.episode_number);
    //   console.log("Season Name:", el.name);
    // });
    resData.episodes.map((el) => {
      // console.log("Season No:", el.season_number);
      // console.log("Episode No:", el.episode_number);
      // console.log("Episode Name:", el.name);
      // console.log("Episode Overview:", el.overview);
      // console.log("Episode Img_Path:", el.still_path);
      return setEpisodeNo(el.episode_number);
    });
    // seasonsData.forEach((el) => console.log(el));
    // } else {
    //   console.log("This is a movie type!");
    // }
    await fetchEpisodeDetails(mediaType, itemId, seasonNo, episodeNo);
  };

  const fetchEpisodeDetails = async (
    mediaType,
    itemId,
    seasonNo,
    episodeNo
  ) => {
    // console.log("Season No:", seasonNo);
    // console.log("Episode No:", episodeNo);
    const params = {
      append_to_response: "videos",
    };
    const res = await tmdbApi.getEpisodeDetails(
      mediaType,
      itemId,
      seasonNo,
      episodeNo,
      {
        params,
      }
    );
    // console.log("fetchEpisodeDetail res", res);
    const resData = res.data;
    console.log("fetchEpisodeDetail resData", resData);
    // console.log("fetchEpisodeDetail itemId:", resData.id);
    // console.log("Season No:", resData.season_number);
    // console.log("Episode No:", resData.episode_number);
    // console.log("Episode Name:", resData.name);
    // console.log("Episode Overview:", resData.overview);
    // console.log("Episode Imag_Path:", resData.still_path);
  };

  const fetchCredits = async (mediaType, itemId) => {
    const params = {
      language: "en-US",
    };
    const res = await tmdbApi.getCredits(mediaType, itemId, {
      params,
    });
    // console.log("fetchMovieCredits response data", res.data);
    const resData = res.data.cast.slice(0, 12);
    // console.log("setCreditsData Movie resData", resData);
    const cast = resData.map((item) => item.name);
    // console.log(cast);
    const castList = Array.from(cast.values()).join(", ");
    // console.log("castList:", castList);
    setCreditsData(castList);
  };

  const fetchSimilar = async (mediaType, itemId) => {
    const params = {
      page: 1,
    };
    const res = await tmdbApi.getSimilar(mediaType, itemId, {
      params,
    });
    // console.log("fetchSimilar response data", res.data.results);
    const resData = res.data.results;
    setSimilarData(resData);
  };

  // const fetchRatings = async (mediaType, itemId) => {
  //   const params = {
  //     page: 1,
  //   };
  //   const res = await tmdbApi.getContentRatings(mediaType, itemId, {
  //     params,
  //   });
  //   console.log("fetchRatings response data", res.data.results);
  //   const resData = res.data.results;
  //   setRatingsData(resData);
  // };

  // console.log("trailerData:", trailerData);

  const getTrailer = () => {
    const trailer = trailerData.videos.results.find(
      (vid) => vid.name === "Official Trailer" || vid.name === "Official Teaser"
    );

    // console.log(trailer);
    // const videoSrc = "/videos/trailer.mp4";
    const key = trailer ? trailer.key : trailerData.videos.results[0].key;
    console.log("Youtube trailer key:", key);
    setVideoKey(key);

    return (
      <YouTube
        videoId={key}
        className={"video"}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            // autoplay: 0,
            controls: 0,
            cc_load_policy: 0,
            fs: 0,
            iv_load_policy: 0,
            loop: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            origin: "http://www.localhost.com",
          },
        }}
      />
    );
  };

  const selectItem = async (mediaType, id) => {
    // setPlayTrailer(true);
    console.log("selectItem mediaType:", mediaType);
    setMediaTypeData(mediaType);
    console.log("selectItem id:", id);
    setItemId(id);
    await fetchDetail(mediaType, id);
    await fetchCredits(mediaType, id);
    await fetchSimilar(mediaType, id);
    // await fetchRatings(mediaType, item.id);
  };

  // Movies List
  const getMovies = async () => {
    const params = { page: 1 };
    const res = await tmdbApi.getDiscoverList(category.movie, {
      params,
    });
    // console.log("Movies res.data.results", res.data.results);
    const resMovieItems = res.data.results;
    // console.log("resMovieItems", res.data.results);
    setMovieItems(resMovieItems);
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, []);

  // Series List
  const getSeries = async () => {
    const params = { page: 1 };
    const res = await tmdbApi.getDiscoverList(category.tv, {
      params,
    });
    const resSeriesItems = res.data.results;
    // console.log("resSeriesItems", res.data.results);
    setSeriesItems(resSeriesItems);
  };

  useEffect(() => {
    getSeries();
    // eslint-disable-next-line
  }, []);

  // Trending Movies And Series List
  const getTrendingList = async () => {
    const params = { page: 1 };
    const res = await tmdbApi.getTrendingList(
      media_type.all,
      time_window.week,
      {
        params,
      }
    );
    const resTrendingItems = res.data.results;
    // console.log("resTrendingItems", res.data.results);
    setTrendingAllItems(resTrendingItems);
  };

  useEffect(() => {
    getTrendingList();
    // eslint-disable-next-line
  }, []);

  // Trending Movies List
  const getTrendingMoviesList = async () => {
    const params = { page: 1 };
    const res = await tmdbApi.getTrendingList(
      media_type.movie,
      time_window.week,
      {
        params,
      }
    );
    const resTrendingMovieItems = res.data.results;
    // console.log("resTrendingMovieItems", res.data.results);
    setTrendingMoviesItems(resTrendingMovieItems);
  };

  useEffect(() => {
    getTrendingMoviesList();
    // eslint-disable-next-line
  }, []);

  // Trending Series List
  const getTrendingTvList = async () => {
    const params = { page: 1 };
    const res = await tmdbApi.getTrendingList(media_type.tv, time_window.week, {
      params,
    });
    const resTrendingTvItems = res.data.results;
    // console.log("resTrendingTvItems", res.data.results);
    setTrendingTvItems(resTrendingTvItems);
  };

  useEffect(() => {
    getTrendingTvList();
    // eslint-disable-next-line
  }, []);

  const fetchSearch = async () => {
    const params = {
      language: "en-US",
      page: 1,
      include_adult: false,
      query: searchQuery,
    };
    const res = await tmdbApi.getSearch({
      params,
    });
    const resData = res.data;
    console.log("fetchSearch resData", resData);
    if (!resData.errors) {
      setSearchResults(resData.results);
    } else {
      setSearchResults([]);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    fetchSearch();
  };

  return (
    <TmdbContext.Provider
      value={{
        isHovered,
        setIsHovered,
        slideRows,
        setSlideRows,
        mediaTypeData,
        setMediaTypeData,
        movieItems,
        seriesItems,
        trendingAllItems,
        trendingMoviesItems,
        trendingTvItems,
        myListItems,
        setMyListItems,
        myTvListItems,
        setMyTvListItems,
        myMovieListItems,
        setMyMovieListItems,
        myWatchedListItems,
        setMyWatchedListItems,
        myTvWatchedListItems,
        setMyTvWatchedListItems,
        myMovieWatchedListItems,
        setMyMovieWatchedListItems,
        // mySearchItems,
        // setMySearchItems,
        myTvSearchItems,
        setMyTvSearchItems,
        myMovieSearchItems,
        setMyMovieSearchItems,
        trailerData,
        setTrailerData,
        getTrailer,
        // fetchStreamingVideo,
        playTrailer,
        setPlayTrailer,
        itemId,
        setItemId,
        selectItem,
        creditsData,
        setCreditsData,
        similarData,
        setSimilarData,
        // ratingsData,
        // setRatingsData,
        genreData,
        setGenreData,
        genreId,
        setGenreId,
        filteredGenres,
        setFilteredGenres,
        tvGenres,
        setTvGenres,
        movieGenres,
        setMovieGenres,
        numOfSeasons,
        setNumOfSeasons,
        seasonsData,
        setSeasonsData,
        seasonNo,
        setSeasonNo,
        episodeNo,
        setEpisodeNo,
        episodesData,
        setEpisodesData,
        videoKey,
        setVideoKey,
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        onChange,
        videoUrl,
        setVideoUrl,
      }}
    >
      {children}
    </TmdbContext.Provider>
  );
};
export default TmdbContext;
