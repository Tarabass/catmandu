import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() { 
  const items = [{ text: 'Home', url: '/' }, { text: 'Starred', url: 'starred'}]
  
  return (
    <div>
      <Navbar title='Catmandu' items={items} />
      <Home />
      <Starred />
    </div>
  );
}

export default App;
