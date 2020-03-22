import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import "./Album.css";
import metallica from "../data/mettalica";
import CardMedia from '@material-ui/core/CardMedia';
import BlockIcon from '@material-ui/icons/Block';
import ZoomInIcon from '@material-ui/icons/ZoomIn';


const Album = ({ alb }) => (
    
    <TableRow>
        <TableCell component="th" scope="row">
            {alb.title}&nbsp;&nbsp;  
            <a href={alb.urlWikipedia}><ZoomInIcon></ZoomInIcon>Wiki</a>
            {(() => {
                if(alb.cover!= undefined){
                    return <CardMedia style={{width:40}} style={{height:200}}  image={alb.cover.medium} title="Contemplative Reptile"/>;}
                else{
                    return <div><BlockIcon ></BlockIcon></div>
                }
            })()}

        </TableCell>
        <TableCell component="th" scope="row"> {alb.genre} </TableCell>
        <TableCell component="th" scope="row"> {alb.length} </TableCell>
        <TableCell component="th" scope="row"> {alb.publicationDate} </TableCell>
        <TableCell component="th" scope="row">
            <List  class="root1">
                { alb.songs.map((m, index) => {
                return <ListItem><a href={m.urlSong}  target="_blank"> {m.title}</a>&nbsp;&nbsp;[&nbsp;{Math.trunc(m.length/60.)}:{m.length%60}&nbsp;]</ListItem>
                })
                }
            </List>
        </TableCell>
    </TableRow>
);

export default Album;
