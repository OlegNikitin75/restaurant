import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (videoRef.current)
      playVideo ? videoRef.current.pause() : videoRef.current.play();
  };

  return (
    <div className="video">
      <video src={meal} ref={videoRef} loop controls={false} muted />
      <div className="video__overlay">
        <div onClick={handleVideo} className="video__overlay-circle">
          {playVideo ? (
            <BsPauseFill color="#ffffff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#ffffff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
