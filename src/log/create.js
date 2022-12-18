
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';

import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';

const Create = () => {
const [name,setname]=useState("")
const [Phone,setphone]=useState("")
const [Password,setpassword]=useState("")
const [Confirmpassword,setConfirmpassword]=useState("")
const [nameerror,setnameerror]=useState("")
const [phoneerror,setphoneerror]=useState("")
const [passerror,setpasserror]=useState("")
const [confirmerror,setconfirmerror]=useState("")

const navigate=useNavigate()

const [collect,setcollect]=useState([])
console.log(Phone);



const mydetail=(uname,uphone,lenphone,confirmpass)=>{
  const collect={
    name : uname,
    Phone :uphone,
    Password :lenphone,
    Confirmpassword:confirmpass
  }
  console.log(collect);


  if(!sessionStorage.getItem("createaccout")){
    sessionStorage.setItem("createaccout",JSON.stringify([]))
  }
  
  
  let data=JSON.parse(sessionStorage.getItem("createaccout"))
  data.push(collect)
  
  sessionStorage.setItem("createaccout",JSON.stringify(data))
  
  navigate("/")


}





const createfun=(event)=>{
  event.preventDefault()


let uname=name.trim()
let uphone=Phone.trim()
let lenphone=uphone.length
let upassword=Password.trim()
let confirmpass=Confirmpassword.trim()









if(uname){
  if(uphone){
    if(lenphone){
      if(lenphone > 10 || lenphone < 10){
        console.log("should be 10 characters");
        // setphoneerror("should be 10 characters only")
        alert("should be 10 characters only")
      }else if(upassword){
       
        let len=upassword.length
        let num=upassword.match(/([0-9])/g)
        let cap=upassword.match(/([A-Z])/g)
        let spl=upassword.match(/[!@#$%^&*>"]/g)

        console.log(len);
        if(len < 8){
          console.log("should be 8 characters only");
          // passerror("should be 8 characters")
          alert("atleast should be 8 characters")
        }else{

          if(num){
            if(cap){
              if(spl){
                  if(confirmpass){
                    if(upassword===confirmpass){
                      console.log("success");
  
                      mydetail(uname,uphone,upassword,confirmpass)
  
                    }else{
                      console.log("please enter correctly");
                      // setconfirmerror("please enter confirm password correctly")
                      alert("please enter confirm password correctly")
                    }
                  }else{
                    console.log("please enter confirm password");
                    setconfirmerror("please enter confirm password")
                  }
              }else{
                console.log("please enter alteast one special letter");
                // setpasserror("please enter alteast one special letter")
                alert("please enter alteast one special letter")
              }
            }else{
              console.log("please enter atleast one captial letter");
              // setpasserror("please enter atleast one captial letter")
              alert("please enter atleast one captial letter")
            }
          }else{
            console.log("please enter atleast one number");
            // setpasserror("please enter atleast one number")
            alert("please enter atleast one number")
          }
        }
       
       

        
        
      }else{
        console.log("please enter password");
        setpasserror("please enter password")
      }
  }
}else{
  console.log("please enter phone number properly")
  setphoneerror("please enter phone number properly")
 
}

}else{
  console.log("please enter username");
  setnameerror("please enter username")
}





}


 

  return (
    
  
<Container>
<Box display="flex" justifyContent={"center"} flexDirection={"column"} alignItems={"center"} sx={{backgroundColor:"white", height:"100vh"}}> 
    <Grid display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{width:"450px",backgroundColor:"white",boxShadow:"0 0 10px 4px #00000078" ,padding:"20px" ,borderRadius:"15px"}}  >
      
    <Typography variant='h5' sx={{color:"#2E4053",textAlign:"center"}}>Create Account</Typography>

<TextField id="outlined-basic" type={"text"} label="Name" onChange={(e)=>setname(e.target.value)}  placeholder='username' sx={{margin:"20px"}}/>
<Typography variant='code' sx={{textAlign:"center",color:"red",fontSize:"15px"}}>{name ? "":nameerror}</Typography>

<TextField id="outlined-basic" type={"text"} label="Phone number"  onChange={(e)=>setphone(e.target.value)}    placeholder='username' sx={{margin:"20px"}}/>
<Typography variant='code' sx={{textAlign:"center",color:"red",fontSize:"15px"}}>{Phone? "":phoneerror}</Typography>

<TextField id="outlined-basic" type={"password"} label="Password"  onChange={(e)=>setpassword(e.target.value)}   placeholder='username' sx={{margin:"20px"}}/>
<Typography variant='code' sx={{textAlign:"center",color:"red",fontSize:"15px"}}>{Password ? "":passerror}</Typography>

<TextField id="outlined-basic"type={"password"} label="Confirm Password"  onChange={(e)=>setConfirmpassword(e.target.value)}   placeholder='username' sx={{margin:"20px"}}/>

<Typography variant='code' sx={{textAlign:"center",color:"red",fontSize:"15px"}}>{Confirmpassword ? "":confirmerror}</Typography>


<Button onClick={(e)=>{createfun(e)}} variant="contained" sx={{margin:"20px 0",backgroundColor:"#E67E22"}}>sumbit</Button>
  
</Grid>
 </Box>
</Container>


  )
}

export default Create