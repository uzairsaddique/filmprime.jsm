import logo from './logo.svg';
import './App.css';
import React from 'react';
import { CssBasicLine } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Actorinformation, MovieInformation, Navbar, Movies , Profile , Sidebar } from './Compoments/Fileimport';
import Home from './Compoments/Home';
import useStyles from './styles'



const  App = ()=> {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <CssBaseline/>
    <Navbar/>
    <main className={classes.content}>
    <div className={classes.toolbar}/>
    <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/" exact element={<Movies />} /> 
        <Route path="/Actorinformation" exact element={<Actorinformation />} />
        <Route path="/MovieInformation" exact element={<MovieInformation />} />
        <Route path="/profile" exact element={<Profile/>} />

        
      </Routes>
      
    </main>
    </div>
  );
}

export default App;
