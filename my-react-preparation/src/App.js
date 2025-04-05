import Message from './meassage.js';
import UseSate from './useStatestudy.js';
import './App.css';
import IfStatement from './ifstatement.js' ;
import Map from './list.js'
import { useState } from 'react';
import Useeffect from './useeffect.js';
import FetchData from './fetch.js';
import Wheater from './wheater.js';
import Api_curd from './api_curd.js';

function App() {
  
  
  return (
    <div>
          <h1>Hello React</h1>
          <Message name="Suraj"/>  
          <UseSate/> 
          <IfStatement/>
          <Map/>
          <Useeffect/>
          <FetchData/>
          <Wheater/>
          <Api_curd/>

    </div>
  );
}

export default App;
