import React from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { getRouteVideos } from '../../graphql/customQueries';
import '../shared.css';
import {useHistory} from "react-router-dom";

function ListVideos(props) {
    const videos = props.videos;
    for(let i = 0; i < videos.length; i++) {
            Storage.get(videos[i].file.substring(videos[i].file.lastIndexOf("/")+1), {level: 'public' }).then(result => {
                videos[i].signedUrl = result;
            }).catch(err => {
                console.log(err);
            });//need to figure out how to wait for this to be done.

            console.log(" the signed video URL: ", videos[i].signedUrl); //this will show undefined
    }

    console.log("the videos are: \n");
    console.log(videos); //this will return the list with corrected signedUrl
    const listItems = videos.map((video) =>

        <div className="child"
             key={video.id}>
            <div>
                <video controls muted width="250">
                    {/*below here will be undefined*/}
                    <p>{video.signedUrl}</p>
                    <source src={video.signedUrl} type="video/mov"/>
                    <source src={video.signedUrl} type="video/mp4"/>
                </video>
            </div>
        </div>
    );
    return (
        <div className="childListing">{listItems}</div>
    )
}

class ClimbingRoute extends React.Component {
    state = {
        route: {}
    };

    handleSubmit = (id) => {
        this.props.history.push(`/uploadVideo/${id}`);
    };

    async componentDidMount() {

        const routeId = this.props.match.params.id;

        let temp = getRouteVideos.split('**');
        let searchQuery = temp[0] + routeId + temp[1];

        const route = await API.graphql(graphqlOperation(searchQuery));
        this.setState({
            route: route.data.getRoute
        })
    }

    async addSingedURL() {
        console.log(this.state.videos.items);
    }

    render() {
        return (
            <div className="App">
                    <div className="parentListing" key={index}>
                        <header>
                            <h1>{this.state.route.name}</h1>
                        </header>
                        <p>
                            <button onClick={() =>this.handleSubmit(route.id)}>Upload Video</button>
                        </p>
                        <ListVideos videos={this.state.route.videos.items} />
                    </div>
            </div>
        );
    }
}

export default ClimbingRoute;