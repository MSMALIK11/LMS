import React from "react";
import ReactPlayer from "react-player";
import vid from '../lacture/p-1.mp4'
const ReactVideoPlayer = ({ videoLink }) => {
  return (
    <div className="player-wraper ">
      <ReactPlayer
        url={vid}
        className="react-pl"
        width="100%"
        height="14rem"
        controls
      />
    </div>
  );
};

export default ReactVideoPlayer;
