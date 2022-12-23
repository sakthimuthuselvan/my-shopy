import { Box, Button } from '@mui/material'
import React from 'react'


const Pagination = ({totalpost,postperpage,setcurrentpage,currentpage}) => {
    let pages=[]

    for(let i=1; i<= Math.ceil(totalpost/postperpage); i++){
    
       
        pages.push(i)
    }

  return (
    <Box sx={{padding:"50px",marginLeft:"400px"}}>
        {                         
          pages.map((page,index)=>{
            return(
                <Button variant="contained" key={index} onClick={()=>setcurrentpage(page)} sx={{margin:"30px 10px"}}
                // className={page==currentpage?"active":""}
                 >{page}</Button>
            )
          })    
        }
    </Box>
  )
}

export default Pagination