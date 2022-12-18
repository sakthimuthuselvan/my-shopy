import { Box, Typography } from '@mui/material'
import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
    <Box>
        <Nav/>
        <Typography variant='h2' sx={{color:"red",textAlign:"center",marginTop:"100px"}}>Home</Typography>
    </Box>
  )
}

export default Home