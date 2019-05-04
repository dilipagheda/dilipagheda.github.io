import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
    
  );
}

export default App;
