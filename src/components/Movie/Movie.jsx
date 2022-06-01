/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

import useStyles from './styles'

function Movie({ movie, i }) {
    const classes = useStyles();
    console.log('movie', movie)
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
        <Typography className={classes.title} variant="h5">{movie?.title}</Typography>
      </Grid>
    )
}

export default Movie
