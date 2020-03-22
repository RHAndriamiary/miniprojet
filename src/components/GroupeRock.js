import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./GroupeRock.css";

import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";

const GroupeRock = () => {
  const useStyles = makeStyles({

    root: {
      width: '100%',
      maxWidth: 360,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 100,
    },
    table: {
      minWidth: 650
    },
    heading: {
      
    },
    media: {
      height: 340,
    },
  });

  const classes = useStyles();
  
  let listeDesMembres = metallica.members.map((m, index) => (
    <MembreGroupeRock membre={m} key={index} />
    )
  );

  return (
    <TableContainer component={Paper}>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Date de naissance</TableCell>
            <TableCell>Instrument de musique</TableCell>
            <TableCell>Début</TableCell>
            <TableCell>Fin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{listeDesMembres}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default GroupeRock;
