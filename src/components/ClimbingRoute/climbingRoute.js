import React from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { getRouteVideos } from '../../graphql/customQueries';
import '../shared.css';

function ListVideos(props) {
    const videos = props.videos;
    const listItems = videos.map((video) =>

        <div className="child"
             key={video.id}>
            <div>
                <video controls muted width="250">
                    {/*below here will be undefined*/}
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
        route: []
    };

    handleSubmit = (id) => {
        this.props.history.push(`/uploadVideo/${id}`);
    };

    async componentDidMount() {

        const routeId = this.props.match.params.id;

        let temp = getRouteVideos.split('**');
        let searchQuery = temp[0] + routeId + temp[1];

        const route = await API.graphql(graphqlOperation(searchQuery));

        for(let i = 0; i < route.data.getRoute.videos.items.length; i++) {
            await Storage.get(route.data.getRoute.videos.items[i].file.substring(route.data.getRoute.videos.items[i].file.lastIndexOf("/")+1), {level: 'public' }).then(result => {
                route.data.getRoute.videos.items[i].signedUrl = result;
            }).catch(err => {
                console.log(err);
            });
        }
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
                                <ListVideos videos={route.videos.items} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ClimbingRoute;