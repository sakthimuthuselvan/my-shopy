import  React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Provider } from 'react-redux';

import './App.css';
import Create from './log/create';
import Login from './log/login';
import Home from './log/pages/Home';
import Nav from './log/pages/Nav';
import Store from "../src/log/pages/redux/Store"


function App() {
  return (

    <div>
      {/* <Provider value={Store}> */}
         <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login/>}></Route>
        <Route path={"create"} element={<Create/>}></Route>
        <Route path={"home"} element={<Home/>}></Route>
        <Route path={"nav"} element={<Nav/>}></Route>
      </Routes>
    </BrowserRouter>


      {/* </Provider> */}
   
 
    </div>
   

      


    

    
  );
}

export default App;
