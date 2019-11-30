import React from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { getRouteVideos } from '../../graphql/customQueries';
import '../shared.css';

Storage.configure({
    level: 'protected'
});

let temp = getRouteVideos.split('**');
let searchQuery = temp[0] + "9e219cbd-ef4e-49d8-9e66-1ad64933a323" + temp[1];

function ListVideos(videoList) {
    const videos = videoList.videos;
    const listItems = videos.map((video) =>

        <div className="child"
             key={video.id}>
            <p>{video.file}</p>
            <div>
                {/*<video controls width="250">*/}
                    {/*<source src={video.file} type="video/mp4">test</source>*/}
                {/*</video>*/}
            </div>
        </div>
    );
    return (
        <div className="childListing">{listItems}</div>
    )
}

class Route extends React.Component {
    state = {
        route: []
    };

    async componentDidMount() {
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

export default Route;