import React from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material'
import { Menu, AccountCircle, Brightness1,  Brightness4 , Brightness7} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import useStyles from './NavBarstyle'
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const classes = useStyles();
  const isMoble = useMediaQuery('(max-width:600px)')
  const theme = useTheme()
  const isAuthenticated = true

  return (
   <>
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
         {isMoble && (
          <IconButton  color = "inherit" edge="start" style={{outline:  'none'}} onClick={()=>{console.log("tel me where are we")}} className={classes.menuButton}>
            <Menu/>
          </IconButton>
         )}
         <IconButton color='inherit' SX={{ml:1}} onClick={()=>{}}>
     {theme.palette.mode =='derk' ? <Brightness7/> : <Brightness4/>}
         </IconButton>
         {!isMoble && 'Search ...'}
         <div>{!isAuthenticated ? (
<Button color='inherit' onClick={()=>{}}>
Login &nbsp <AccountCircle/>
</Button>
         ):(
<Button color='inherit' component={Link} to={`/profile/:id`} className={classes.linkedButton} onClick={()=>{}}>
{!isMoble && <>My Movies &nbsp; </>}
<Avatar style={{width: 30, height: 30}} alt='Profile' src='https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png'/>
</Button>
         )}</div> 
         {isMoble && 'Search ....'}
      </Toolbar>


    </AppBar>
   </>
  )
}

export default Navbar