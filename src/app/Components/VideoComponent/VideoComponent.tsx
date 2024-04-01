"use client";
import React, { useRef } from "react";

interface VideoProps {
  src: string;
  width: number;
  height: number;
}
const VideoComponent: React.FC<VideoProps> = ({ src, width, height }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={src}
        width={width}
        height={height}
        controls
        className="rounded-lg w-full"
      />
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
};

export default VideoComponent;
