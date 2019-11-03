import React from 'react';
import './App.css';
import { Analytics, Storage } from 'aws-amplify';
import uuid from 'uuid/v4';

Storage.configure({
    level: 'private'
});

class uploadPictures extends React.Component {
    uploadFile = () => {
        let name;
        const file = document.getElementById("uploadPicture").files[0];
        let extention = file.name.substring(file.name.lastIndexOf('.'));
        console.log(extention);
        name = uuid() + extention;


        Storage.put(name, file).then(() => {
            this.setState({ file: name });
        })
    };


    componentDidMount() {
        Analytics.record('Amplify_CLI');
    }

    render() {
        return (
            <div className="App">
                <p> Pick a file</p>
                <input id="uploadPicture" type="file"/>
                <button onClick={this.uploadFile} >upload</button>
                <S3Album class='image' level="private" path='' />
            </div>
        );
    }
}

export default uploadPictures;