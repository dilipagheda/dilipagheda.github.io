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
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
library.add(faBars)

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/aboutme"  render={(routeProps)=><Aboutme />} />
                    <Route path="/portfolio"  render={(routeProps)=><Portfolio />} />
                    <Route path="/resume"  render={(routeProps)=><Resume />}/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
