import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/Card'
import Interval from './components/Interval'

function App() {
  return (
    <div className="App">
      <h1>React-Redux (Simple)</h1>
      <div className='line'>
        <Interval></Interval>
      </div>
      <div className='line'>
        <Card title='CARD 2' green>x</Card>
        <Card title='CARD 3' blue>z</Card>
        <Card title='CARD 4' purple>z</Card>
      </div>
    </div>
  );
}

export default App;
