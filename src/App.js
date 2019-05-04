import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Introduction from './components/Introduction';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars} from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Route path="/" exact render={(routeProps)=><Home {...routeProps} child={()=><Introduction />}/>} />
                <Route path="/aboutme"  render={(routeProps)=><Home {...routeProps} child={()=><Aboutme />}/>} />
                <Route path="/portfolio"  render={(routeProps)=><Home {...routeProps} child={()=><Portfolio />}/>} />
                <Route path="/resume"  render={(routeProps)=><Home {...routeProps} child={()=><Resume />}/>} />
            </div>
        </Router>
    );
}

export default App;
