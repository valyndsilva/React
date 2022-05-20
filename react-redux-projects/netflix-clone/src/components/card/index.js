import {
  Add,
  Check,
  Visibility,
  VisibilityOff,
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  CloseOutlined,
  KeyboardArrowDown,
  PlayArrow,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Meta,
  Item,
  Image,
  Grid,
  InnerSlider,
  Feature,
  Content,
  Controls,
  TopControls,
  LeftControls,
  RightControls,
  InfoTop,
  FeatureTitle,
  FeatureText,
  Maturity,
  Row,
} from "./styles/card";
import apiConfig from "../../api/apiConfig";
// import { unavailablePortrait } from "../../config/config";
import ContentModal from "../ContentModal";
import { category } from "../../api/tmdbApi";
import TmdbContext from "../../context/TmdbContext";
import GlobalContext from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
export const FeatureContext = createContext();
export default function Card({ children, ...restProps }) {
  // Feature Data
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Grid = function CardGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};

Card.InnerSlider = function CardInnerSlider({ children, ...restProps }) {
  return <InnerSlider {...restProps}>{children}</InnerSlider>;
};

Card.Item = function CardItem({ key, item, children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>;
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Controls = function CardControls({ children, ...restProps }) {
  return <Controls {...restProps}>{children}</Controls>;
};

Card.TopControls = function CardTopControls({ children, ...restProps }) {
  return <TopControls {...restProps}>{children}</TopControls>;
};

Card.LeftControls = function CardLeftControls({ children, ...restProps }) {
  return <LeftControls {...restProps}>{children}</LeftControls>;
};

Card.RightControls = function CardRightControls({ children, ...restProps }) {
  return <RightControls {...restProps}>{children}</RightControls>;
};

Card.InfoTop = function CardInfoTop({ children, ...restProps }) {
  return <InfoTop {...restProps}>{children}</InfoTop>;
};

Card.Content = function CardContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Card.FeatureTitle = function CardFeatureTitle({ children, ...restProps }) {
  return <FeatureTitle {...restProps}>{children}</FeatureTitle>;
};
Card.FeatureText = function CardFeatureText({ children, ...restProps }) {
  return <FeatureText {...restProps}>{children}</FeatureText>;
};

Card.Maturity = function CardMaturity({ children, ...restProps }) {
  return <Maturity {...restProps}>{children}</Maturity>;
};

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } =
    useContext(FeatureContext);
  return showFeature ? (
    <Feature
      {...restProps}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
    >
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <CloseOutlined
          className="closeIcon"
          onClick={() => setShowFeature(false)}
        />

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() +
              itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null;
};

Card.Row = function CardRow({ slideItem, children, ...restProps }) {
  const {
    isHovered,
    setIsHovered,
    trailerData,
    getTrailer,
    setPlayTrailer,
    playTrailer,
    selectItem,
    genreId,
    setGenreId,
    filteredGenres,
    setMyListItems,
    setMyWatchedListItems,
    itemId,
  } = useContext(TmdbContext);
  const {
    addToWatchlist,
    addToWatched,
    removeFromWatchlist,
    removeFromWatched,
    // moveToWatchlist,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  const [slideNumber, setSlideNumber] = useState(0);
  const [sliderMoved, setSliderMoved] = useState(false); // slider arrow state
  // const [addedToList, setAddedToList] = useState(false);
  // const [addedToWatched, setAddedToWatched] = useState(false);

  const sliderRef = useRef();

  useEffect(() => {
    // console.log("watchlist:", watchlist);
    setMyListItems(watchlist);
    // console.log("watched:", watched);
    setMyWatchedListItems(watched);
    // eslint-disable-next-line
  }, []);

  // Check if movie/show already in watchlist and avoid adding it to the list again:
  // console.log("itemId:", itemId);

  let storedWatchlistItem = watchlist.find((o) => o.id === itemId);
  // console.log("storedWatchlistItem", storedWatchlistItem);

  let storedWatchlistItemWatched = watched.find((o) => o.id === itemId);
  // console.log("storedWatchlistItemWatched", storedWatchlistItemWatched);

  // To disable add to watchlist button if already in store, returns false if movie not in watchlist
  // const watchlistDisabled = storedWatchlistItem ? true : false;
  const watchlistDisabled = storedWatchlistItem
    ? true
    : storedWatchlistItemWatched
    ? true
    : false;
  // console.log("watchlistDisabled", watchlistDisabled);
  // setAddedToList(watchlistDisabled);

  const watchedDisabled = storedWatchlistItemWatched ? true : false;
  // console.log("watchedDisabled", watchedDisabled);
  // setAddedToWatched(watchedDisabled);

  // ///////

  const handleClick = (direction) => {
    setSliderMoved(true);
    let distance = sliderRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      // console.log("left clicked distance", distance);
      setSlideNumber(slideNumber - 1);
      // console.log("left clicked slideNumber", slideNumber);
      sliderRef.current.style.transform = `translateX(${230 + distance}px)`;
      // console.log("CSSStyleDeclaration", sliderRef.current.style);
      // console.log(sliderRef.current.style.transform);
    }
    if (direction === "right" && slideNumber < 12) {
      // console.log("right clicked distance", distance);
      setSlideNumber(slideNumber + 1);
      // console.log("right clicked slideNumber", slideNumber);
      sliderRef.current.style.transform = `translateX(${-230 + distance}px)`;
      // console.log("CSSStyleDeclaration", sliderRef.current.style);
      // console.log(sliderRef.current.style.transform);
    }
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  useEffect(() => {
    const genre_id = [];
    filteredGenres.map((el) => (genre_id[el.id] = el.name));
    // console.log("genre_id:", genre_id);
    setGenreId(genre_id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* {console.log("slideItem", slideItem)} */}
      {/* {console.log(slideItem.type)} */}
      <Card key={`${category}-${slideItem.title}`}>
        <Row {...restProps}>
          {children}
          <Title>{slideItem.title}</Title>
          <Grid>
            <ArrowBackIosOutlined
              className="sliderArrow left"
              onClick={() => handleClick("left")}
              style={{ display: !sliderMoved && "none" }}
            />
            <InnerSlider ref={sliderRef}>
              {slideItem.data?.map((item, index) => (
                <Item
                  key={item.id}
                  item={item}
                  index={index}
                  style={{
                    left: isHovered && index * 198 - 50 + index * 2.5,
                  }}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setPlayTrailer(true);
                    selectItem(slideItem.type, item.id);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                    setPlayTrailer(false);
                  }}
                >
                  {/* {console.log(slideItem.type)} */}
                  {/* {console.log(itemId)} */}

                  {/* 
                  {item.backdrop_path ? (
                    <Image
                      src={apiConfig.originalImage(
                        item.backdrop_path || item.poster_path
                      )}
                    />
                  ) : null} */}

                  <Image
                    src={
                      item
                        ? apiConfig.originalImage(
                            item.backdrop_path || item.poster_path
                          )
                        : apiConfig.unavailablePortrait
                    }
                  />

                  {isHovered && (
                    <>
                      {/* {console.log(playTrailer)} */}
                      {trailerData.videos &&
                      trailerData.videos.results.length > 0 &&
                      playTrailer
                        ? getTrailer()
                        : "Sorry, No Trailer Available"}

                      <Meta>
                        <TopControls>
                          {truncate(
                            item.original_title ||
                              item.title ||
                              item.original_name ||
                              item.name,
                            50
                          )}
                        </TopControls>
                        <Controls>
                          <LeftControls className="leftControls">
                            <IconButton>
                              <Link to={{ pathname: "/watch", item: item }}>
                                <PlayArrow
                                  className="playIcon"
                                  onClick={() => {
                                    setPlayTrailer(true);
                                  }}
                                />
                              </Link>
                            </IconButton>

                            {/* {console.log(
                              "watchlistDisabled:",
                              watchlistDisabled
                            )} */}

                            {watchlistDisabled ? (
                              <IconButton
                                className="checkBtn"
                                onClick={() => removeFromWatchlist(item.id)}
                              >
                                <Check className="checkIcon" />
                              </IconButton>
                            ) : (
                              <IconButton
                                className="addBtn"
                                disabled={watchlistDisabled}
                                onClick={() => addToWatchlist(item)}
                              >
                                <Add className="addIcon" />
                              </IconButton>
                            )}
                            {/* {console.log("watchedDisabled:", watchedDisabled)} */}
                            {watchedDisabled ? (
                              <IconButton
                                className="notWatchedBtn"
                                onClick={() => removeFromWatched(item.id)}
                                // onClick={() => moveToWatchlist(item)}
                              >
                                <VisibilityOff className="notWatchedIcon" />
                              </IconButton>
                            ) : (
                              <IconButton
                                className="watchedBtn"
                                disabled={watchedDisabled}
                                onClick={() => addToWatched(item)}
                              >
                                <Visibility className="watchedIcon" />
                              </IconButton>
                            )}

                            <IconButton>
                              <ThumbUpAltOutlined />
                            </IconButton>
                          </LeftControls>
                          <ContentModal
                            className="media"
                            type={slideItem.type}
                            movie={item}
                          >
                            <RightControls className="rightControls">
                              <IconButton>
                                <KeyboardArrowDown />
                              </IconButton>
                            </RightControls>
                          </ContentModal>
                        </Controls>

                        <InfoTop>
                          <span className="percentValue">93% Match</span>
                          <span className="maturityValue">18</span>
                          <span className="lengthValue">1h 57m</span>
                        </InfoTop>
                        <span className="genre">
                          {item.genre_ids
                            .map((el) => (el = genreId[el]))
                            .join(", ")}
                        </span>
                      </Meta>
                    </>
                  )}
                </Item>
              ))}
            </InnerSlider>
            <ArrowForwardIosOutlined
              className="sliderArrow right"
              onClick={() => handleClick("right")}
            />
          </Grid>
        </Row>
      </Card>
    </>
  );
};
