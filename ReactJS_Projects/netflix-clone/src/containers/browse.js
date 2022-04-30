import React, { useContext, useEffect, useState } from "react";
import SelectProfileContainer from "./profiles";
import { auth } from "../lib/firebase.prod.js";
import { Loading, Header, Card } from "../components";
import * as ROUTES from "../routes/routes";
import apiConfig from "../api/apiConfig";
import ContentModal from "../components/ContentModal";
import { Link } from "react-router-dom";
import {
  ArrowDropDown,
  InfoOutlined,
  NotificationsActive,
  PlayArrow,
  VolumeUpOutlined,
} from "@mui/icons-material";

import { FooterContainer } from "./footer";
import tmdbApi, { movieType } from "../api/tmdbApi";
import TmdbContext from "../context/TmdbContext";
export default function BrowseContainer({ slides }) {
  const {
    slideRows,
    setSlideRows,
    setPlayTrailer,
    setIsHovered,
    selectItem,
    searchQuery,
    setSearchQuery,
    searchResults,
    onChange,
    setMyTvSearchItems,
    setMyMovieSearchItems,
  } = useContext(TmdbContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  const user = auth.currentUser || {};

  useEffect(() => {
    // console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // eslint-disable-next-line
  }, [profile.displayName]);

  // // Header Feature Data - START
  const [movieItem, setMovieItem] = useState([]);
  const [heroBg, setHeroBg] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });
      // console.log("response", response);
      // console.log("1st movie response", response.data.results[0]);
      // setMovieItems(response.data.results[0]);

      const randomMovieItem =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ];
      // console.log("Random movie response", randomMovieItem);
      setMovieItem(randomMovieItem);

      // console.log(
      //   apiConfig.originalImage(response.data.results[0]?.backdrop_path)
      // );

      //1st Item Image
      // const bgImg = apiConfig.originalImage(
      //   response.data.results[0]?.backdrop_path
      // );

      const bgImg = apiConfig.originalImage(randomMovieItem?.backdrop_path);
      setHeroBg(bgImg);
    };
    getMovies();
  }, []);
  // console.log("heroMovie from header component", movieItem);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const [category, setCategory] = useState("home");
  // const [slideRows, setSlideRows] = useState([]);
  useEffect(() => {
    //to set the active slide rows
    setSlideRows(slides[category]);
    // eslint-disable-next-line
  }, [category]);
  // console.log("slideRows", slideRows);

  useEffect(() => {
    const results = searchResults.map((item) => item);
    // console.log("Results:", results);
    // setMySearchItems(results);
    const movieSet = results.filter((result) => result.media_type === "movie");
    // console.log("movieSet", movieSet);
    setMyMovieSearchItems(movieSet);
    const tvSet = results.filter((result) => result.media_type === "tv");
    // console.log("tvSet", tvSet);
    setMyTvSearchItems(tvSet);

    if (slideRows.length > 0 && searchQuery.length > 0 && results.length > 0) {
      setSlideRows(slides["mySearch"]);
      // console.log("True");
    } else {
      setSlideRows(slides[category]);
      // console.log("False");
    }
    // eslint-disable-next-line
  }, [searchQuery]);

  //if profile.displayName exists show loading and then take to BrowseContainer
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      {movieItem && (
        <Header
          src={heroBg}
          // src="joker1"
          alt={
            movieItem.name ||
            movieItem.original_name ||
            movieItem.title ||
            movieItem.original_title
          }
          dontShowOnSmallViewPort
        >
          <Header.Frame className={isScrolled ? "navbar scrolled" : "navbar"}>
            <Header.Group>
              <Header.Logo
                to={ROUTES.HOME}
                src="/images/logo.svg"
                alt="Netflix"
              />

              <Header.TextLink
                active={category === "home" ? "true" : "false"}
                onClick={() => setCategory("home")}
              >
                Home
              </Header.TextLink>
              <Header.TextLink
                active={category === "series" ? "true" : "false"}
                onClick={() => setCategory("series")}
              >
                Series
              </Header.TextLink>
              <Header.TextLink
                active={category === "movies" ? "true" : "false"}
                onClick={() => setCategory("movies")}
              >
                Films
              </Header.TextLink>
              <Header.TextLink
                active={category === "trending" ? "true" : "false"}
                onClick={() => setCategory("trending")}
              >
                New & Popular
              </Header.TextLink>
              <Header.TextLink
                active={category === "myList" ? "true" : "false"}
                onClick={() => setCategory("myList")}
              >
                My List
              </Header.TextLink>
              {/* <Header.NavLink to={ROUTES.MY_LIST}>My List</Header.NavLink> */}
            </Header.Group>
            <Header.Group>
              <Header.Search
                // searchTerm={searchTerm}
                // setSearchTerm={setSearchTerm}
                onChange={onChange}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              ></Header.Search>
              <Header.Profile>
                <Header.TextLink>{user.displayName}</Header.TextLink>
                <NotificationsActive className="notificationsIcon" />
                <Header.Picture src={user.photoURL} />
                <ArrowDropDown className="dropdownIcon" />
                <Header.DropDown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink>{user.displayName}</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => auth.signOut()}>
                      Sign Out
                    </Header.TextLink>
                  </Header.Group>
                </Header.DropDown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>

          <Header.Feature>
            <Header.Title>{movieItem.title}</Header.Title>
            <Header.Text id="hideMeAfter10Seconds">
              <span>{truncate(movieItem.overview, 150)}</span>
            </Header.Text>
          </Header.Feature>
          <Header.Controls>
            <Header.Group>
              <Link to={{ pathname: "/watch", item: movieItem }}>
                {console.log(movieItem)}
                <Header.PlayButton
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setPlayTrailer(true);
                    selectItem("movie", movieItem.id);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setPlayTrailer(false);
                  }}
                  onClick={() => {
                    setIsHovered(true);
                    setPlayTrailer(true);
                    selectItem("movie", movieItem.id);
                  }}
                >
                  <PlayArrow className="playIcon" />
                  Play
                </Header.PlayButton>
              </Link>
              <ContentModal className="media" movie={movieItem}>
                <Header.MoreInfoButton>
                  <InfoOutlined className="moreIcon" />
                  <span>More Info</span>
                </Header.MoreInfoButton>
              </ContentModal>
            </Header.Group>
            <Header.Group className="rightAligned">
              <VolumeUpOutlined className="volumeUpIcon" />
              <Header.MaturityIcon>
                <span>18</span>
              </Header.MaturityIcon>
            </Header.Group>
          </Header.Controls>
          <Header.Gradient></Header.Gradient>
        </Header>
      )}

      <Card.Group>
        {/* {console.log(slideRows)} */}
        {slideRows.map((slideItem, index) => (
          <Card.Row
            key={index}
            slideItem={slideItem}
            index={index}
            category={category}
            // setPlayTrailer={setPlayTrailer}
          />
        ))}
      </Card.Group>

      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
