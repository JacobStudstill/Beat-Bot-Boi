import React, { useEffect, useState } from "react";
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleGetPlaylists = () => {
    axios
      .get(PLAYLISTS_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    
      <button onClick={handleGetPlaylists}>Get Playlists</button>
      {data?.items ? data.items.map((item) => (<><img className="spotifyPhotos" src={item.images[0]?.url}  /><a className="spotifyLink" href={item.external_urls.spotify}>{item.name}</a><hr /></>)) : null}
    </>
  );
};

/* <a href="{item.external_urls.spotify}">{item.name}<hr /></a> 
<img src="{item.images[0].url}" />*/

export default SpotifyGetPlaylists;