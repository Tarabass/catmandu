import React from 'react';
import Navbar from './components/Navbar';

function App() { 
  const items = [{ text: 'Home', url: '/' }, { text: 'Starred', url: 'starred'}]
  
  return (
    <div>
      <Navbar title='Catmandu' items={items} />
    </div>
  );
}

export default App;
