import React from 'react';
import Home from './components/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

function App() {
  return (
    <Home />
  );
}

export default App;
