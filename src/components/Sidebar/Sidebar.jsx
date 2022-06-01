/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import React from 'react'
import { useTheme } from '@mui/styles'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material'
import useStyles from './styles';

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const mockCategories = [
    {
        label: 'Comedy',
        value: 'comedy',
    },
    {
        label: 'Action',
        value: 'action',
    },
    {
        label: 'Horror',
        value: 'horror',
    },
    {
        label: 'Drama',
        value: 'drama',
    },
    {
        label: 'Adventure Works',
        value: 'adventureworks',
    },
]
const categories = [
    {
        label: 'Popular',
        value: 'popular',
    },
    {
        label: 'Top Rated',
        value: 'top_rated',
    },
    {
        label: 'Upcoming',
        value: 'upcoming',
    },
]

function Sidebar() {
    const theme = useTheme();
    const classes = useStyles();
    return (
      <div>
        <Link to="/" className={classes.imageLink}>
          <img src={theme.palette.mode === 'light' ? redLogo : blueLogo} className={classes.image} alt="filmer logo" />
        </Link>
        <Divider />
        <List>
          <ListSubheader>Categories</ListSubheader>
          {categories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItem onClick={() => {}} button>
                {/* <ListItemIcon>
                  <img src={redLogo} alt="logoooo" className={classes.genreImages} height={30} />
                </ListItemIcon> */}
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />

        <List>
          <ListSubheader>Genres</ListSubheader>
          {mockCategories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItem onClick={() => {}} button>
                {/* <ListItemIcon>
                  <img src={redLogo} alt="logoooo" className={classes.genreImages} height={30} />
                </ListItemIcon> */}
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    )
}

export default Sidebar
