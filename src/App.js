import React from 'react';
import './App.css';
import Amplify, { Analytics, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator} from 'aws-amplify-react';
import Home from './components/Home/home';
import Gyms from './components/Companies/company';
import Gym from './components/Gym/gym';
import Wall from './components/Wall/wall';
import ClimbingRoute from './components/ClimbingRoute/climbingRoute';
import UploadVideo from './components/UploadVideo/uploadVideos';

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
                <div className="NavBar">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/gyms">Gyms</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route exact path="/gyms" component={Gyms} />
                        <Route exact path="/wall/:id" component={Wall}/>
                        <Route exact path="/climbingRoute/:id" component={ClimbingRoute} />
                        <Route exact path="/gym/:id" component={Gym}/>
                        <Route exact path="/uploadVideo/:id" component={UploadVideo} />
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default withAuthenticator(App, true);