import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { fade, makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Link } from "react-router-dom";
import GroupeRock from "./components/GroupeRock";
import TestMaterialUI from "./components/TestMaterialUI";
import ListeHobbies from "./components/ListeHobbies";
//Data Metallica
import metallicaData from "./data/mettalica";
// onglet de navigation
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
//bar de recherche
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
//Icone
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Album';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//Navigation
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,'aria-controls': `simple-tabpanel-${index}`,
  };
}

function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  root3:{
    backgroundColor:'royalblue',
    color:'white',
  },

  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },

}));

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <div className="Page">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                Mini projet ReactJS - Mars 2020
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Toolbar>
          </AppBar>
        </div>

        <div>   
          <div className="TitleGroup">
            <h1>{metallicaData.name}</h1>
            <img src={metallicaData.picture.medium}/>
            <a target ="_blank" href={metallicaData.urlYouTube}></a>
          </div>
          <BrowserRouter>
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
              setValue(newValue);
              }}
                showLabels
                className={classes.root3}
              >
              <Link to="/"><BottomNavigationAction label="A propos" icon={<HomeIcon />} /></Link>
              <Link to="/groupe"><BottomNavigationAction label="Membres" icon={<GroupIcon />} /></Link>
              <Link to="/albums"><BottomNavigationAction label="Albums" icon={<AlbumIcon />} /></Link>
            </BottomNavigation>
            <Route exact path="/" component={ListeHobbies}></Route>
            <Route path="/groupe" component={GroupeRock}/>
            <Route path="/albums" component={TestMaterialUI}></Route> 
          </BrowserRouter>
        </div>
      
        <div className="Footer">
          
          <BottomNavigation
            className={classes.root3}
            ><p>Suivez-nous sur :</p>
            <BottomNavigationAction target="_blank" href={metallicaData.urlOfficialWebsite} style={{color: 'white'}} icon={<LanguageIcon />} />
            <BottomNavigationAction target="_blank" href={metallicaData.urlFacebook} style={{color: 'white'}} icon={<FacebookIcon />} />
            <BottomNavigationAction target="_blank" href={metallicaData.urlTwitter} style={{color: 'white'}} icon={<TwitterIcon />} />
            <BottomNavigationAction target="_blank" href={metallicaData.urlAllmusic} style={{color: 'white'}} icon={<PlayArrowIcon />} />
          </BottomNavigation>
        </div>
      </div>
    </div>
  );
}

export default App;
