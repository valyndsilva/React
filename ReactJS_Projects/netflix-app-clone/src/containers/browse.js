import React, { useEffect, useState } from "react";
import SelectProfileContainer from "./profiles";
import { auth } from "../lib/firebase.prod.js";
import { Loading, Header, Card, Player } from "../components";
import * as ROUTES from "../routes/routes";
import {
  ArrowDropDown,
  InfoOutlined,
  NotificationsActive,
  PlayArrow,
} from "@mui/icons-material";
import Fuse from "fuse.js";

export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState([]);

  const user = auth.currentUser || {};

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // eslint-disable-next-line
  }, [profile.displayName]);

  useEffect(() => {
    //to set the active slide rows
    setSlideRows(slides[category]); //slides is either series or movie, category is the genre
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.title"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  //if profile.displayName exists show loading and then take to BrowseContainer
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/logo.svg"
              alt="Netflix"
            />
            <Header.TextLink>Home</Header.TextLink>
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
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
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
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
          <Header.Title>Movie Title Here</Header.Title>
          <Header.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            blanditiis rem eveniet doloremque, optio omnis, aperiam dolor cumque
            nemo eum debitis rerum dicta fugiat? Qui tempore nostrum repudiandae
            quam maiores?
          </Header.Text>
          <Header.Controls>
            <Header.PlayButton>
              <PlayArrow className="playIcon" />
              Play
            </Header.PlayButton>
            <Header.MoreInfoButton>
              <InfoOutlined className="moreIcon" />
              <span>More Info</span>
            </Header.MoreInfoButton>
          </Header.Controls>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/trailer.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
