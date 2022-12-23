
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { athenticate } from './pages/redux/Slice';
 

const Login = () => {
  const dispatch=useDispatch()
const [name,setname]=useState("")
const [pass,setpass]=useState("")
const [arr,setarr]=useState("")
const [nameerror,setnameerror]=useState("")
const [passworderror,setpassworderror]=useState("")


const navigate=useNavigate()



const state=useSelector((data)=>data).sample
console.log(state);




console.log(name);
console.log(pass);

const submitfun=(event)=>{
event.preventDefault();



const arr=JSON.parse(sessionStorage.getItem("createaccout"))

console.log(arr);


arr.find((item)=>{
  
  

if(item.name===name && item.Password===pass){
 
  sessionStorage.setItem("isLogged",JSON.stringify(true))
  dispatch(athenticate())
  // navigate("/")

 
}else if(name==="" && pass===""){
  setnameerror("please enter your name")
  setpassworderror("please enter your password")
}else if(name===""){
setnameerror("please enter your name")
}else if(pass===""){
setpassworderror("please enter your password")
}else{
  alert("invaild")
}


})

}

const createfun=()=>{
navigate("/create")
}



  return (
    
  

<Box display="flex" justifyContent={"center"} flexDirection={"column"} alignItems={"center"} sx={{backgroundColor:"#E5E8E8 ", height:"100vh"}}> 
    <Grid display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{width:"400px",backgroundColor:"white",padding:"20px",boxShadow:"0 0 10px 4px #00000078" ,borderRadius:"15px"}}  >
      
<Typography variant='h5' sx={{color:"#2E4053",textAlign:"center"}}>Login</Typography>

<TextField id="outlined-basic" label="User Name" onChange={(e)=>setname(e.target.value)}  placeholder='username' sx={{margin:"20px"}}/>

<Typography variant='code' sx={{textAlign:"center",color:"red"}}>{name ? "":nameerror}</Typography>

<TextField id="outlined-basic" label="Password"  onChange={(e)=>setpass(e.target.value)} type="password"   placeholder='username' sx={{margin:"20px"}}/>
<Typography variant='code' sx={{textAlign:"center",color:"red"}}>{pass? "":passworderror}</Typography>

<Button onClick={(e)=>{createfun(e)}} variant="text">create new account</Button>

<Button onClick={(e)=>{submitfun(e)}} variant="contained" sx={{margin:"20px 0",backgroundColor:"#E67E22"}}>sumbit</Button>


</Grid>
 </Box>



  )
}

export default Login