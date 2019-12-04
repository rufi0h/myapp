import React from 'react';
// import './css/uploadPictures.css';
import { Analytics, Storage } from 'aws-amplify';
import { S3Album } from 'aws-amplify-react';
import uuid from 'uuid/v4';
import {API, graphqlOperation} from "aws-amplify/lib-esm/index";
import {getWallsRoutes, listCompanysGyms} from "../../graphql/customQueries";
import { addVideo } from '../../graphql/customQueries';

Storage.configure({
    level: 'protected'
});

class uploadVideos extends React.Component {
     uploadFile = async () => {
        let name;
        const file = document.getElementById("uploadVideos").files[0];
        let extention = file.name.substring(file.name.lastIndexOf('.'));


        console.log(extention);
        name = uuid() + extention;


        Storage.put(name, file).then(() => {
            console.log("\n\n This is the name", name, "\n\n");
            this.setState({ file: name });
        });

//create a created at field
        const routeId = this.props.match.params.id;
        console.log(routeId.slice(1));
        console.log(routeId.slice(1));
        let temp = addVideo.split('**');
        console.log(temp);
        let searchQuery = temp[0]
            + routeId.slice(1)
            + temp[1]
            + ("https://betavideos-dev.s3.amazonaws.com/private/us-east-1%3Ab765443f-f22d-4e24-9d5e-fb970b6f2b4f/" +name)
            + temp[2]
            + "2019-11-30T14:30Z"
            + temp[3];
        console.log(searchQuery);
        await API.graphql(graphqlOperation(searchQuery));
    };

    componentDidMount() {
        Analytics.record('Amplify_CLI');
    }

    render() {
        return (
            <div className="App">
                <p> Pick a file</p>
                <input id="uploadVideos" type="file"/>
                <p>id is {this.props.match.params.id}</p>
                <button onClick={this.uploadFile} >upload</button>
            </div>
        );
    }
}

export default uploadVideos;