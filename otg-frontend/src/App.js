import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter,Routes, Route } from "react-router-dom" 
import {Memory,MyComponent} from './components/Create'
import Activity from './components/Activity';
import Ocassion from './components/Ocassion';
import StartFundraising from './components/StartFundraising';
import StoryGenerator from './components/StoryGenerator';
import StoryCreator from './components/StoryCreator';

function App() {
  return (
    <div>
    <Header></Header>
    <div>
      <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<StartFundraising />} /> 
          <Route path="/2" element={<Memory />} />  
          <Route path="/3" element={<Activity />} />  
          <Route path="/4" element={<Ocassion />} />  
          <Route path="/5" element={<StoryGenerator />} />
          <Route path="/6" element={<StoryCreator />} />   
        </Routes>    
      </BrowserRouter> 
      </div>
    <Footer></Footer> 
    </div>
  
  );
}


export default App;

