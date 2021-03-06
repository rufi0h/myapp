import React from 'react';
import './css/company.css';
import { Storage, API, graphqlOperation } from 'aws-amplify';
//import { S3Album } from 'aws-amplify-react';
import { listCompanysGyms } from '../../graphql/customQueries';
import { useHistory } from 'react-router-dom';

Storage.configure({
    level: 'protected'
});



function ListGyms(props) { //make a class
    const gyms = props.gyms;
    const history = useHistory();

    function testFunction (id) {
        history.push(`/gym/${id}`);
    }
    const listItems = gyms.map((gym) =>
        <div className="child"
             key={gym.id}>
            <p>{gym.name}</p>
            <p>{gym.location}</p>
            <img
                src={gym.gymImg}
                alt="gymImg"/>
            <p>
                <button onClick={() => testFunction(gym.id)}> go to the gym</button>
            </p>
        </div>
    );
    return (
        <div className="childListing">{listItems}</div>
    )
}

class Company extends React.Component {
    state = {
                companies: [],
                toGym: false
            };

    async componentDidMount() {
        const companyList = await API.graphql(graphqlOperation(listCompanysGyms));
        console.log(companyList.data.listCompanys.items);
        this.setState({
            companies: companyList.data.listCompanys.items
        })
    }

    render() {
        return (
            <div className="App">
                    {
                        this.state.companies.map((companies, index) => (
                            <div className="parentListing" key={index}>
                                <header>
                                    <h1>{companies.name}</h1>
                                </header>
                                <p>{companies.location} </p>
                                <img
                                     src={companies.companyImg}
                                     alt="companyLogo"/>
                                <ListGyms gyms={companies.gyms.items} />
                            </div>
                        ))
                    }
            </div>
        );
    }
}

export default Company;