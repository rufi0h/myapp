//uploadVideos.js
import React from 'react';
import { Analytics, Storage } from 'aws-amplify';
import uuid from 'uuid/v4';
import {API, graphqlOperation} from "aws-amplify/lib-esm/index";
import {addVideo, getRouteVideos} from '../../graphql/customQueries';
import './uploadVideos.css';

Storage.configure({
    level: 'public'
});

const ProgressBar = (props) => {
    return (
        <div className="progressBar">
            <Filler percentage={props.percentage}/>
        </div>
    )
};

const Filler = (props) => {
    return <div className="filler" style={{width: `${props.percentage}%`}}/>
};

class uploadVideos extends React.Component {
    state = {
        route: {},
        //uploading: false,
        uploadProgress: 0,
        //successfulUploaded: false
    };
     uploadFile = async () => {
        let name;
        const uploadThis = this;
        const file = document.getElementById("uploadVideos").files[0];
        let extension = file.name.substring(file.name.lastIndexOf('.'));

        name = uuid() + extension;
        Storage.put(name, file, {
            progressCallback(progress) {
                let percentageDone = Math.round((progress.loaded/progress.total)*100);
                uploadThis.setState( () => {
                    return {
                        uploadProgress: percentageDone
                    }
                });
                console.log(`Uploaded: ${percentageDone}%`);
            },
            level: 'public'
        }).then(() => {
            this.setState({ file: name });
        });

        //saving video to the route
        const routeId = this.props.match.params.id;
        let date = new Date();
        date = date.toISOString().split('T');
        let temp = addVideo.split('**');
        let mutationCreateVideo = temp[0]
            + routeId
            + temp[1]
            + name
            + temp[2]
            + date[0]
            + temp[3];
        await API.graphql(graphqlOperation(mutationCreateVideo));
    };

    async componentDidMount() {
        const routeId = this.props.match.params.id;
        let temp = getRouteVideos.split('**');
        let searchQuery = temp[0] + routeId + temp[1];
        const route = await API.graphql(graphqlOperation(searchQuery));
        this.setState({
            route: route.data.getRoute
        });
        Analytics.record('Amplify_CLI');
    }

    render() {
        return (
            <div className="App">
                <p> Pick a file to upload to route {this.state.route.name}</p>
                <input id="uploadVideos" type="file"/>
                <button onClick={this.uploadFile} >upload</button>
                <ProgressBar percentage={this.state.uploadProgress}/>
            </div>
        );
    }
}

export default uploadVideos;