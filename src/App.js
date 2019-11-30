import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        
        <Header branding = "Real-Time Cryptocurrency Dashboard"/>
        <div className="container">
        
        
        <Body />
        </div>
        
      </div>
  );
}

export default App;
