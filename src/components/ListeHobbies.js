import React from "react";
import "./ListeHobbies.css";

import metallicaData from "../data/mettalica";
import { Typography } from "@material-ui/core";

const ListeHobbies = () => {

  return (
  <div>
    <Typography className="Abstract">
      <div>{metallicaData.abstract}</div>
    </Typography>
    <Typography className="InfoGeneral">
      <div className="Informartions">Informations générales sur le groupe</div>
      <div>Localisation:{metallicaData.locationInfo}</div>
      
      <div>Genre:{metallicaData.genres}</div>
      
      <div>Genre de musique:{metallicaData.dbp_genre}</div>
      
      <div>Labels:{metallicaData.labels}</div>
      
      <div>Record labels:{metallicaData.recordLabel}</div>
      
      <div>Deezer fans:{metallicaData.deezerFans}</div>
      
      <div>Naissance du groupe:{metallicaData.lifeSpan.begin}</div>
      
      <div>Association:{metallicaData.associatedMusicalArtist}</div>
      
    </Typography>
    </div>
  );
};

export default ListeHobbies;