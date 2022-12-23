import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { useDispatch, useSelector,} from 'react-redux';
// import { logout } from './redux/Slice';
import {athenticate,logoutathenticate} from '../pages/redux/Slice'



// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import { Container } from '@mui/system';
import { Navigate, useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';
import Pagination from './redux/Pagination';

// import Typography from '@mui/material/Typography';


const Home = () => {
const [data,setdata]=useState([])
const [currentpage,setcurrentpage]=useState(1)
const [postperpage,setpostperpage]=useState(5)

  // const dispatch=useDispatch()

 
const learnfun=(id)=>{
  navigate({
    pathname:"/details",
    search:createSearchParams({
      id:id
    }).toString()
  })
  console.log(id)
}


useEffect(()=>{
fetch('https://fakestoreapi.com/products')
  .then((data)=>data.json())
  .then((data)=>setdata(data))

},[])


const lastpage=currentpage*postperpage
const firstpage=lastpage-postperpage 


const currentpost=data.slice(firstpage,lastpage)


const navigate=useNavigate()
const state=useSelector((data)=>data.sample)
console.log(state);

  return (
    <Box>
        <Nav/>
        <Container>
        <Typography variant='h2' sx={{color:"red",textAlign:"center",marginTop:"100px"}}>Home</Typography>
        {/* <Button onClick={()=>logoutfun()}>logout</Button> */}
      
        <Box>
          {currentpost.map((item,index)=>{
           return(
            <Grid  key={index}  justifyContent={"center"} sx={{marginLeft:"350px"}}>
              <Card  sx={{ maxWidth: 500,margin:"50px 0" }}>
          <CardMedia
            sx={{ height: 400 ,width:500}}
            image={item.image}
            title="green iguana"
          />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Rating name="read-only" value={item.rating.rate} readOnly />
        <Typography variant="body2" sx={{fontSize:"20px"}} color="text.secondary">
         {/* {item.description} */}
         ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{backgroundColor:"orangered"}}>Add To Cart</Button>
        {/* <Button varient="contained">Add To Cart</Button> */}
        <Button onClick={()=>learnfun(item.id)} size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
           )
            
          })}
        </Box>

        
        </Container>
    
        {/* <Pagination totalpost={data.length} postperpage={postperpage} setcurrentpage={setcurrentpage} currentpage={currentpage}/> */}
      
    <Pagination totalpost={data.length}
     postperpage={postperpage} 
    setcurrentpage={setcurrentpage}
    currentpage={currentpage}
    
    />
    </Box>
  )
}

export default Home