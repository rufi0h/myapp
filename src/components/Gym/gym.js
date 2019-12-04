import React from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';
//import { S3Album } from 'aws-amplify-react';
import { getGymsWalls } from '../../graphql/customQueries';
import './css/gym.css';
import {useHistory} from "react-router-dom";

Storage.configure({
    level: 'protected'
});

function ListWalls(props) {
    const wall = props.walls;
    const history = useHistory();

    function testFunction (id) {
        history.push(`/wall/${id}`);
    }
    const listItems = wall.map((wall) =>

        <div className="child"
             key={wall.id}>
            <p>{wall.name}</p>
            <img
                src={wall.wallImg}
                alt="wallImg"/>
            <p>{wall.routes.items.length} Routes</p>
            <p>
                <button onClick={() => testFunction(wall.id)}> go to the wall</button>
            </p>
        </div>
    );
    return (
        <div className="childListing">{listItems}</div>
    )
}

class Gym extends React.Component {
    state = {
        gym: []
    };

    async componentDidMount() {
        const gymId = this.props.match.params.id;

        let temp = getGymsWalls.split('**');
        let searchQuery = temp[0] + gymId + temp[1];
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
                        <div className="parentListing" key={index}>
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