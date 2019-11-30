import React from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { getWallsRoutes } from '../../graphql/customQueries';
import './css/wall.css';

Storage.configure({
    level: 'protected'
});

let temp = getWallsRoutes.split('**');
let searchQuery = temp[0] + "64d1b466-bae6-497a-86a0-abbfa64947dd" + temp[1];

function ListRoutes(routeList) {
    const route = routeList.routes;
    const listItems = route.map((route) =>

        <div className="wall"
             key={route.id}>
            <p>{route.name}</p>
            <p>{route.videos.items.length} Video</p>
        </div>
    );
    return (
        <div className="routeListing">{listItems}</div>
    )
}

class Wall extends React.Component {
    state = {
        wall: []
    };

    async componentDidMount() {
        const wall = await API.graphql(graphqlOperation(searchQuery));
        this.setState({
            wall: [wall.data.getWall]
        })
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.wall.map((wall, index) => (
                        <div className="gymListing" key={index}>
                            <header>
                                <h1>{wall.name}</h1>
                            </header>
                            <p>{wall.id} </p>
                            <img
                                src={wall.wallImg}
                                alt="wallImg"/>
                            <ListRoutes routes={wall.routes.items} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Wall;