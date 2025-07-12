import React, { useState, useEffect } from 'react';
import {Route, HashRouter as Router, Switch} from 'react-router-dom'
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import ComprehensiveResume from './components/resume/ComprehensiveResume';
import GitHubProjects from './components/GitHubProjects';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import ProjectDetail from './components/portfolio/ProjectDetail';

const store = ConfigureStore();
library.add(faBars)

function App() {
    const [resizeKey, setResizeKey] = useState(0);

    useEffect(() => {
        const handleResize = () => setResizeKey(k => k + 1);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <div key={resizeKey}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/aboutme"  render={(routeProps)=><Aboutme {...routeProps}/>} />
                        <Route path="/portfolio"  render={(routeProps)=><Portfolio {...routeProps}/>} />
                        <Route path="/resume"  render={(routeProps)=><Resume {...routeProps}/>}/>
                        <Route path="/comprehensive-resume"  render={(routeProps)=><ComprehensiveResume {...routeProps}/>}/>
                        <Route path="/github-projects"  render={(routeProps)=><GitHubProjects {...routeProps}/>} />
                        <Route path="/:category/projectdetails/:Id" component={ProjectDetail} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
