import React from 'react';
import {Route, HashRouter as Router, Switch} from 'react-router-dom'
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import ProjectDetail from './components/portfolio/ProjectDetail';
import Projects from "./components/portfolio/Projects";

const store = ConfigureStore();
library.add(faBars)

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/aboutme"  render={(routeProps)=><Aboutme {...routeProps}/>} />
                        <Route path="/portfolio"  render={(routeProps)=><Portfolio {...routeProps}/>} />
                        <Route path="/resume"  render={(routeProps)=><Resume {...routeProps}/>}/>
                        <Route path="/:category/projectdetails/:Id" component={ProjectDetail} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
