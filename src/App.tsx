import React from 'react';
import './App.css';
import Banner from "./banner";
import AppItem from "./AppItem";
import {apps} from "./apps";

const App=function() {
  return (
    <div className="App">
       <Banner/>
       <div className="appsWrap">
           {
               apps.map((app,index)=>{
                   return <AppItem app={app} index={index}/>
               })
           }
       </div>
    </div>
  );
}

export default App;
