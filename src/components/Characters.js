import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalCtx } from "../App";
import Character from "./Character";

const Characters = () => {
  const [characterData, setCharacterData] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  const { gState } = React.useContext(GlobalCtx);
  const { url } = gState;

  const getCharacters = async () => {
    const response = await axios.get(`${url}characters`);
    setCharacterData(response.data.characters);
  };

  const addLike = async (id) => {
    await axios.patch(
      `${url}characters/${id}/like`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${gState.token}`,
        },
      }
    );

    getUserLikes();
    getCharacters();
  };

  const getUserLikes = async () => {
    const response = await axios.get(`${url}users/me/liked`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${gState.token}`,
      },
    });
    setUserLikes(response.data.liked);
  };

  useEffect(() => {
    if (gState.ready) {
      getCharacters();
      if (gState.token) {
        getUserLikes();
      }
    }
  }, [gState]);

  return (
    <div>
      {characterData.map((character) => (
        <Character
          {...character}
          addLike={addLike}
          userLikes={userLikes}
          key={character._id}
        />
      ))}
    </div>
  );
};

export default Characters;
