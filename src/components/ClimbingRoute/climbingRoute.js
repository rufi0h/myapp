import React from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { getRouteVideos } from '../../graphql/customQueries';
import '../shared.css';
import {useHistory} from "react-router-dom";

Storage.configure({
    level: 'protected'
});

function GoUpload (props) {
    const history = useHistory();
    history.push(`/climbingRoute/${props}`);
}


function ListVideos(props) {
    const videos = props.videos;
    const listItems = videos.map((video) =>

        <div className="child"
             key={video.id}>
            <p>{video.file}</p>
            <div>
                <video controls muted width="250">
                    <source src={video.file} type="video/mov"/>
                    <source src={video.file} type="video/mp4"/>
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
        route: []
    };

    handleSubmit = (id) => {
        console.log('the value of id is ', id);
        this.props.history.push(`/uploadVideo/:${id}`);
    };

    async componentDidMount() {

        const routeId = this.props.match.params.id;

        let temp = getRouteVideos.split('**');
        let searchQuery = temp[0] + routeId + temp[1];

        const route = await API.graphql(graphqlOperation(searchQuery));
        this.setState({
            route: [route.data.getRoute]
        })
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.route.map((route, index) => (
                        <div className="parentListing" key={index}>
                            <header>
                                <h1>{route.name}</h1>
                            </header>
                            <p>
                                <button onClick={() =>this.handleSubmit(route.id)}>Upload Video</button>
                            </p>
                            <p>{route.id}</p>
                            <ListVideos videos={route.videos.items} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ClimbingRoute;