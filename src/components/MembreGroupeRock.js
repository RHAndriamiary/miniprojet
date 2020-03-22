import React from "react";
import "./MembreGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import metallicaData from "../data/mettalica";

const MembreGroupeRock = ({ membre }) => (
  <TableRow>
    <TableCell component="th" scope="row">
      {membre.name}
    </TableCell>
    <TableCell component="th" scope="row">
      {membre.birthDate}
    </TableCell>
    <TableCell component="th" scope="row">
      {membre.instruments}
    </TableCell>
    <TableCell component="th" scope="row">
      {membre.begin}
    </TableCell>
    <TableCell component="th" scope="row">
      {membre.end}
    </TableCell>
  </TableRow>
);

export default MembreGroupeRock;
