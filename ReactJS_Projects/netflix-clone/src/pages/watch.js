import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ArrowBackOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import TmdbContext from "../context/TmdbContext";
import playerApi from "../api/playerApi";
import YouTube from "react-youtube";

export default function Watch() {
  const {
    videoKey,
    videoUrl,
    setVideoUrl,
    mediaTypeData,
    itemId,
    seasonNo,
    episodeNo,
  } = useContext(TmdbContext);

  useEffect(() => {
    console.log(videoKey);
    console.log(videoUrl);
    fetchStreamingVideo(mediaTypeData, itemId, seasonNo, episodeNo);
    // eslint-disable-next-line
  }, [videoKey, videoUrl, mediaTypeData, itemId, seasonNo, episodeNo]);

  const fetchStreamingVideo = async (mediaType, id, sNo, eNo) => {
    console.log("fetchStreamingVideo mediaType:", mediaType);
    console.log("itemId:", id);
    const res = await playerApi.getStreamingVideo(
      mediaTypeData,
      itemId,
      sNo,
      eNo
    );
    console.log("fetchStreamingVideo res", res.request.responseURL);
    setVideoUrl(res.request.responseURL);
  };
  return (
    <Container>
      <Link to={{ pathname: "/browse" }}>
        <BackButton>
          <ArrowBackOutlined />
          Home
        </BackButton>
      </Link>
      {/* <YouTube
        videoId={videoKey}
        className={"YTvideo"}
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
      /> */}

      {videoUrl ? (
        <iframe
          title={videoKey}
          src={videoUrl}
          width="100%"
          height="100%"
          frameborder="0"
          type="mp4/video"
        ></iframe>
      ) : (
        <YouTube
          videoId={videoKey}
          className={"YTvideo"}
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
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .YTvideo {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;
const BackButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  background-color: black;
  padding: 15px;
  opacity: 0.8;
  z-index: 2; // arrow over video
`;
