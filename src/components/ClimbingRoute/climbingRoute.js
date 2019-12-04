import React from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { getRouteVideos } from '../../graphql/customQueries';
import '../shared.css';

Storage.configure({
    level: 'protected'
});

function ListVideos(props) {
    const videos = props.videos;
    const listItems = videos.map((video) =>

        <div className="child"
             key={video.id}>
            <p>{video.file}</p>
            <div>
                <video controls muted width="250">
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

    async componentDidMount() {

        const routeId = this.props.match.params.id;
        console.log(routeId);

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
                            <p>{route.id} </p>
                            <ListVideos videos={route.videos.items} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ClimbingRoute;