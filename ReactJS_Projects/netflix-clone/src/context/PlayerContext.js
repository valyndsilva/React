import React, { createContext } from "react";
import playerApi from "../api/playerApi";
// import ReactPlayer from "react-player";
const PlayerContext = createContext({});
export const PlayerProvider = ({ children }) => {
  const fetchStreamingVideo = async (
    mediaType,
    itemId,
    seasonNo,
    episodeNo
  ) => {
    console.log("mediaType:", mediaType);
    console.log("fetchDetail itemId:", itemId);
    const res = await playerApi.getStreamingVideo(
      mediaType,
      itemId,
      seasonNo,
      episodeNo
    );
    console.log("fetchStreamingVideo res", res);
  };

  return (
    <PlayerContext.Provider value={{ fetchStreamingVideo }}>
      {children}
    </PlayerContext.Provider>
  );
};
export default PlayerContext;
