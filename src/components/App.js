import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './Navigation';
import Auth from './Auth';
import Home from './Home';

const App = () =>
    <Router>
        <div>
            <Navigation/>
            <Route
                exact path="/home"
                component={() => <Home/>}
            />
            <Route
                exact path="/Auth"
                component={() => <Auth/>}
            />
        </div>
    </Router>

export default App;
