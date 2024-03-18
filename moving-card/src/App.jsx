

import React from 'react'
import Card from './components/Card'
import './App.css'
import d1 from './assets/d1.webp';
import d2 from './assets/d2.jpeg';
import d3 from './assets/d3.webp';


function App() {
  return (
    <div className='div-app'>
      <Card image={d1} title="Gallery"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
      <Card  image={d2} title="Title"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
      <Card  image={d3} title="Card"  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
      {/* <Card  image={d2} title="Introduction3"  content="Lorem"/> */}
     
    </div>
  )
}

export default App