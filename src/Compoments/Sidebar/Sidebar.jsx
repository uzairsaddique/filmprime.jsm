import React, { useEffect } from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import useStyles from './SidebarStyle'
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';



const Catagories = [
    { lable: 'Popular', value: 'Popular' },
    { lable: 'TopRated', value: 'TopRated' },
    { lable: 'upcoming', value: 'upcoming' },

]
const demoCatagories = [
    { lable: 'Conmdy', value: 'Conmdy' },
    { lable: 'Action', value: 'Action' },
    { lable: 'Horror', value: 'Horror' },
    { lable: 'Drema', value: 'Drema' },
    { lable: 'Animation', value: 'Animation' },

]
const Sidebar = ({ setMobileOpen }) => {
    const classes = useStyles();
    const theme = useTheme()
    return (
        <>
            <Link to="/" className={classes.imageLink}>
                <img className={classes.image}
                    src={theme.palette.mode == 'light' ? redLogo : blueLogo}
                    alt='Filmpirmw logo'
                />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Catagories</ListSubheader>
                {
                    demoCatagories.map(({ lable, value }) => (

                        <Link key={value} className={classes.links} to='/'>
                            <ListItem onClick={() => { }}>
                                <ListItemText primary={lable} />
                            </ListItem>

                        </Link>
                    ))
                }
            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>
                {
                    Catagories.map(({ lable, value }) => (

                        <Link key={value} className={classes.links} to='/'>
                            <ListItem onClick={() => { }}>
                                <ListItemText primary={lable} />
                            </ListItem>

                        </Link>
                    ))
                }
            </List>
        </>
    )
}

export default Sidebar