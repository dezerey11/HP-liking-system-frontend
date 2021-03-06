import React, { useEffect, useState } from "react";
import { GlobalCtx } from "../App";
import "./Character.css";

const Character = (props) => {
  const { gState } = React.useContext(GlobalCtx);

  return (
    <div>
      <div className="character-container">
        <div className="img">
          <img
            className="character-img"
            src={
              props.image_url ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            alt="character"
          />
        </div>
        <div className="character-data">
          <h2 className="name">{props.name}</h2>
          <h3 className="house">{props.house || "House is unknown"}</h3>
          <p className="patronus">
            Patronus: <strong>{props.patronus || "unknown"}</strong>
          </p>
          <div>
            {gState.token &&
              (!props.userLikes.includes(props._id) ? (
                <div>
                  <strong>
                    Is {props.name} one of your favorite characters?
                  </strong>
                  <svg
                    className="thumbs-up"
                    onClick={() => props.addLike(props._id)}
                    xmlns="http://www.w3.org/2000/svg"
                    id="icon-thumbs-up"
                    viewBox="0 0 512 512"
                  >
                    <path d="m496 336c0-16-9-31-23-40 5-7 7-15 7-24 0-27-21-48-48-48l-94 0c11-40 17-82 17-125 0-37-30-67-67-67-37 0-67 30-67 67 0 52-19 92-58 119-10 7-22 14-35 19l0-45-128 0 0 320 128 0 0-31c30 1 44 9 59 16 14 8 28 15 53 15l160 0c27 0 48-21 48-48 0-6-1-12-3-18 20-5 35-24 35-46 0-9-2-17-7-24 14-9 23-24 23-40z m-448 144c-9 0-16-7-16-16 0-9 7-16 16-16 9 0 16 7 16 16 0 9-7 16-16 16z m396-128l-28 0 0 32 16 0c9 0 16 7 16 16 0 9-7 16-16 16l-32 0 0 32c9 0 16 7 16 16 0 9-7 16-16 16l-160 0c-17 0-26-5-39-11-16-8-35-18-73-21l0-171c21-7 41-16 57-28 49-34 74-86 74-150 0-16 13-29 29-29 16 0 29 13 29 29 0 43-6 85-18 125-4 12-7 23-8 32l141 0c9 0 16 7 16 16 0 9-7 16-16 16l-16 0 0 32 28 0c11 0 20 7 20 16 0 9-9 16-20 16z" />
                  </svg>
                  <span className="yes">Like</span>
                </div>
              ) : (
                <div>
                  <strong>
                    {props.name} is one of your favorite characters!
                  </strong>
                </div>
              ))}
            <br />
            <div className="number-likes">
              <strong>{props.likes}</strong> Likes
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Character;
