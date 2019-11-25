import React from 'react';
//import './css/uploadPictures.css';//change css file
import { Storage, API, graphqlOperation } from 'aws-amplify';
//import { S3Album } from 'aws-amplify-react';
import { getCompany, listCompanys} from '../../graphql/queries';

Storage.configure({
    level: 'protected'
});


class Company extends React.Component {
    state = { companies: [] };

    async componentDidMount() {
        const companyList = await API.graphql(graphqlOperation(listCompanys));
        this.setState({
            companies: companyList.data.listCompanys.items
        })
    }

    listQuery = async () => {
        console.log('listing todos');
        const company = await API.graphql(graphqlOperation(getCompany, { id: "d9a619f3-702f-44c0-b2be-bffa384dbedd"}));
        alert(JSON.stringify(company));
        console.log(company.data)
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1> Company Page </h1>
                </header>
                <p>
                    {
                        this.state.companies.map((companies, index) => (
                            <p key={index}>{companies.name} in {companies.location} </p>
                        ))
                    }
                </p>

                <button onClick={this.listQuery}> list the company</button>
            </div>
        );
    }
}

export default Company;