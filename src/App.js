import  React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Provider, useSelector } from 'react-redux';
// import { athenticate } from './log/pages/redux/Slice';
import './App.css';
import Create from './log/create';
import Login from './log/login';
import Home from './log/pages/Home';
import Nav from './log/pages/Nav';
import {store} from "../src/log/pages/redux/Store"
import Details from './log/pages/Details';


function App() {

    const state=useSelector((data)=>data.sample)
    console.log(state);
  return (


      // <Provider store={store}>
         <BrowserRouter>
        {state.athenticate ?(
          <Routes>

              <Route path={"/"} element={<Home/>}></Route>
             <Route path={"nav"} element={<Nav/>}></Route>
             <Route path={"details"} element={<Details/>}></Route>
          </Routes>
        ):( 
          <Routes>
            <Route path={"/"} element={<Login/>}></Route>
             <Route path={"create"} element={<Create/>}></Route>
          </Routes>
         
         
        )} 
        
     
     </BrowserRouter>
      // </Provider>
   
 


  );
}

export default App;
