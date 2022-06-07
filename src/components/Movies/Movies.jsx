/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'

import { useGetMoviesQuery } from '../../services/TMDB'

import { Pagination, MovieList } from '..'

function Movies() {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory)
  const { data, error, isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery })
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'))

  const numberOfMovies = lg ? 16 : 18;

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    )
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">No movies that match that name.
          <br />
          Please search for sonmething else
        </Typography>
      </Box>
    )
  }

  if (error) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">An error has occured
        </Typography>
      </Box>
    )
  }

    return (
      <div>
        <MovieList movies={data} numberOfMovies={numberOfMovies} />
        <Pagination currentPage={page} setPage={setPage} totalPages={data?.total_pages} />
      </div>
    )
}

export default Movies
