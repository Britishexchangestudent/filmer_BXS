/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import { Button, IconButton, Toolbar, Avatar, Drawer, AppBar, useMediaQuery } from '@mui/material'
import React from 'react'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles';
import useStyles from './styles';

function Navbar() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme()
  const isAuthenticated = true;
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbar}>
            {isMobile && (
              <IconButton color="inherit" edge="start" style={{ outline: 'none' }} onClick={() => {}} className={classes.menuButton}>
                <Menu />
              </IconButton>
            )}
            <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
              {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            {!isMobile && 'Search...'}
            <div>
              {!isAuthenticated ? (
                <Button color="inherit" onClick={() => {}}>
                  Login &nbsp; <AccountCircle />
                </Button>
                ) : (
                  <Button color="inherit" onClick={() => {}} component={Link} to="/profile/:id" className={classes.linkButton}>
                    {!isMobile && <>My Movies &nbsp;</>}
                    <Avatar style={{ width: 30, height: 30 }} alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&usqp=CAU" />
                  </Button>
                )}
            </div>
            {isMobile && 'Search...'}
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar
