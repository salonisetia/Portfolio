import React from 'react';
import Home from './Home'; // Importing the main UI file
import './index.css';     // Importing Tailwind styles

function App() {
  return (
    <div className="App">
      {/* Home component contains our Navbar, Hero, and About sections */}
      <Home />
    </div>
  );
}

export default App;