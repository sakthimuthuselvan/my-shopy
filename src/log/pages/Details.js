import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Details = () => {
    const [collect,setcollect]=useState([])
    const [param]=useSearchParams()
    console.log(param);
    let getid=parseInt(param.get("id"))
    console.log(getid);


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products'+'/'+getid)
          .then((data)=>data.json())
          .then((data)=>setcollect(data))
        
        },[collect])
        console.log(collect);

  return (
  
   <Box>
      <Container>

        <Card sx={{ maxWidth: 500,margin:"50px 200px" }}>
      
      <CardContent>
      <Typography gutterBottom variant="h3" sx={{color:"orangered",textAlign:"center"}} component="h2">
          {collect.category}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          {collect.title}
        </Typography>
     
        <CardMedia
        sx={{ height: 400 ,width:500}}
        image={collect.image}
        title="green iguana"
      />
      <Typography variant="body2" sx={{fontSize:"30px",color:"orangered",margin:"20px 50px"}}> ${collect.price}</Typography>
        {/* <Rating name="read-only" value={collect.rating.rate} readOnly /> */}
        <Typography variant="body2" sx={{fontSize:"20px"}} color="text.secondary">
         {collect.description}
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{backgroundColor:"orangered"}}>Buy Now</Button>
        {/* <Button varient="contained">Add To Cart</Button> */}
        {/* <Button onClick={()=>learnfun(item.id)} size="small">Learn More</Button> */}
      </CardActions>
    </Card>

    </Container>
   </Box>
  
  )
}

export default Details