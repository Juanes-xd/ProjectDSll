/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "../../Styles/PagDefaultStyles.css";

const PagDefault = () => {
  return (
    <>
      <main className="containerd">
        <p className="hellosito">Hello 👋 Now We</p>
        <section className="animationd">
          <div className="firstd">
            <div>Working For</div>
          </div>
          <div className="secondd">
            <div>Give you</div>
          </div>
          <div className="thirdd">
            <div>The better page</div>
          </div>
        </section>
        <div className="wait"> While you waiting, why not listen a song?</div>
        <iframe
        className="spotify"
          src="https://open.spotify.com/embed/track/08XWh5c0BMyD1nKVxxl91z?utm_source=generator"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </main>
      
    </>
  );
};

export default PagDefault;
