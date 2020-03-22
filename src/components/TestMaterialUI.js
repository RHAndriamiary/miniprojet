import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Album from "./Album";

import "./TestMaterialUI.css";

import metallica from "../data/mettalica";
import MembreGroupeRock from "./MembreGroupeRock";

const TestMaterialUI = () => {
  const useStyles = makeStyles({

    root1: {
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
  
  let albums = metallica.albums.map((m, index) => (
    <Album alb={m} key={index} />
    )
  );

  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Albums</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Durée</TableCell>
            <TableCell>Publication</TableCell>
            <TableCell align="center">Les titres</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{albums}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestMaterialUI;
