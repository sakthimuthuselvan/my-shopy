import { createSlice } from "@reduxjs/toolkit";

export const sampleslice=createSlice({
    name:"sample",
    initialState:{
 
    athenticate:JSON.parse(sessionStorage.getItem("isLogged")) || false,
     age:20,   
    },
    reducer:{
        athenticate(state,action){
            state.athenticate=true
        },
        age(state,action){
            state.age+=1
        }
      
       
    }

})



export default sampleslice.reducer
export const {athenticate,age}=sampleslice.actions