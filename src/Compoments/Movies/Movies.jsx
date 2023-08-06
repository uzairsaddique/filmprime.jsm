import React, {useState, useEffect} from 'react'
import { Box, CircularProgress, useMediaQuery ,Typography } from '@mui/material'
import {useGetMoviesQuery} from '../../services/TMDB'
import { useSelector } from 'react-redux' 

const Movies = () => {
  const {data} = useGetMoviesQuery()
   console.log("data",data)
  return (
    <div>Movies</div>
  )
}

export default Movies