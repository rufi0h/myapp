import React from 'react';
import './App.css';
import Amplify, { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator} from 'aws-amplify-react';
import UploadPictures from './components/uploadPictures/uploadPictures.js';

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
            <UploadPictures></UploadPictures>
        );
    }
}

export default withAuthenticator(App, true);