import React from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
//import { S3Album } from 'aws-amplify-react';
import { getGymsWalls } from '../../graphql/customQueries';
import './css/gym.css';

Storage.configure({
    level: 'protected'
});

let temp = getGymsWalls.split('**');
let searchQuery = temp[0] + "312d2b3d-a995-4610-bc1b-de538b4e5fde" + temp[1];

function ListWalls(wallList) {
    const wall = wallList.walls;
    const listItems = wall.map((wall) =>

        <div className="wall"
             key={wall.id}>
            <p>{wall.name}</p>
            <img
                src={wall.wallImg}
                alt="wallImg"/>
            <p>{wall.routes.items.length} Routes</p>
        </div>
    );
    return (
        <div className="wallListing">{listItems}</div>
    )
}

class Gym extends React.Component {
    state = {
        gym: []
    };

    async componentDidMount() {
        const gymList = await API.graphql(graphqlOperation(searchQuery));
        this.setState({
            gym: [gymList.data.getGym]
        })
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.gym.map((gym, index) => (
                        <div className="gymListing" key={index}>
                            <header>
                                <h1>{gym.name}</h1>
                            </header>
                            <p>{gym.id} </p>
                            <img
                                src={gym.gymImg}
                                alt="wallImg"/>
                            <ListWalls walls={gym.walls.items} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Gym;