import React from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { getWallsRoutes } from '../../graphql/customQueries';
import './css/wall.css';
import {useHistory} from "react-router-dom";

Storage.configure({
    level: 'protected'
});

function ListRoutes(props) {
    const history = useHistory();

    function testFunction (id) {
        history.push(`/climbingRoute/${id}`);
    }
    const route = props.routes;
    const listItems = route.map((route) =>

        <div className="child"
             key={route.id}>
            <p>{route.name}</p>
            <p>{route.videos.items.length} Video</p>
            <p>
                <button onClick={() => testFunction(route.id)}> go to the route</button>
            </p>
        </div>
    );
    return (
        <div className="childListing">{listItems}</div>
    )
}

class Wall extends React.Component {
    state = {
        wall: []
    };

    async componentDidMount() {
        const wallId = this.props.match.params.id;
        let temp = getWallsRoutes.split('**');
        let searchQuery = temp[0] + wallId + temp[1];

        console.log(searchQuery);
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
                        <div className="parentListing" key={index}>
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