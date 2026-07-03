import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss"

const Spotify = () => {
  return (
    <MacWindow width="max(25vw)">
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/artist/6Mv8GjQa7LKUGCAqa9qqdb?utm_source=generator"
          width="100%"
          height="352"
          style={{ borderRadius: "12px" }}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title="Spotify Artist"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;