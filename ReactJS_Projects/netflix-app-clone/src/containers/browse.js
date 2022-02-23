import React, { useEffect, useState } from "react";
import SelectProfileContainer from "./profiles";
import { auth } from "../lib/firebase.prod.js";
import { Loading, Header } from "../components";
import * as ROUTES from "../constants/routes";
import {
  ArrowDropDown,
  InfoOutlined,
  NotificationsActive,
  PlayArrow,
} from "@mui/icons-material";
export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const user = auth.currentUser || {};

  useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // eslint-disable-next-line
  }, [profile.displayName]);
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
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
            <Header.TextLink>New & Popular</Header.TextLink>
            <Header.TextLink>My List</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm}></Header.Search>
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
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
