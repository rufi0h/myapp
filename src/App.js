import React from 'react';
import './App.css';
import Amplify, { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator} from 'aws-amplify-react';
import Home from './components/Home/home';
import Gyms from './components/Companies/company';
import Gym from './components/Gym/gym';
import Wall from './components/Wall/wall';
import Routes from './components/Route/route';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


Amplify.configure(awsconfig);
Storage.configure({
    level: 'private'
});

class App extends React.Component {

    componentDidMount() {
        Analytics.record('Amplify_CLI');
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/gyms">Gyms</Link>
                            </li>
                            <li>
                                <Link to="/gym">Gym</Link>
                            </li>
                            <li>
                                <Link to="/wall">Wall</Link>
                            </li>
                            <li>
                                <Link to="/route">Route</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/gyms">
                            <Gyms />
                        </Route>
                        <Route path="/gym">
                            <Gym />
                        </Route>
                        <Route path="/wall">
                            <Wall />
                        </Route>
                        <Route path="/route">
                            <Routes />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default withAuthenticator(App, true);