import React from 'react';
import { Analytics, Storage } from 'aws-amplify';
//import { S3Album } from 'aws-amplify-react';
import uuid from 'uuid/v4';
import {API, graphqlOperation} from "aws-amplify/lib-esm/index";
import {addVideo, getRouteVideos} from '../../graphql/customQueries';

Storage.configure({
    level: 'public'
});

class modifyWall extends React.Component {
    state = {
        wall: {}
    };
    uploadFile = async () => {
        let name;
        const file = document.getElementById("uploadVideos").files[0];
        let extention = file.name.substring(file.name.lastIndexOf('.'));

        name = uuid() + extention;

        Storage.put(name, file, {
            level: 'public'
        }).then(() => {
            this.setState({ file: name });
        });

        //create a created at field
        const routeId = this.props.match.params.id;
        let temp = addVideo.split('**');
        let mutationCreateVideo = temp[0]
            + routeId
            + temp[1]
            + ("https://betavideos-dev.s3.amazonaws.com/public/" +name)
            + temp[2]
            + Date().toISOString()
            + temp[3];
        await API.graphql(graphqlOperation(mutationCreateVideo));
    };

    async componentDidMount() {
        const wallId = this.props.match.params.id;
        let temp = getWallsRoutes.split('**');
        let searchQuery = temp[0] + wallId + temp[1];

        const wall = await API.graphql(graphqlOperation(searchQuery));
        this.setState({
            wall: wall.data.getWall
        })
    }

    render() {
        return (
            <div className="App">
                <p> Pick a file to upload to route {this.state.wall.name}</p>
                <input id="uploadVideos" type="file"/>
                <button onClick={this.uploadFile} >upload</button>
            </div>
        );
    }
}

export default modifyWall;