/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */

import { ExitToApp } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
  const { isAuthenticated, user } = useSelector((state) => state.user)

  const favouriteMovies = [];

  const logout = () => {
    localStorage.clear();

    window.location.href = '/';
  }

    return (
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4" gutterBottom>My Profile</Typography>
          <Button onClick={logout} color="inherit">
            Logout &nbsp; <ExitToApp />
          </Button>
        </Box>
        {!favouriteMovies.length ? (
          <Typography variant="h5">Add favourites or watch them later</Typography>
        ) : (
          <Box>
            Favourite Movies
          </Box>
        )}
      </Box>
    )
}

export default Profile
