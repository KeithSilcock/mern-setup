import React from 'react';
import axios from 'axios';

class Test extends React.Component{

    componentDidMount(){
        this.getUserData();
    }

    async getUserData(){
        const response = await axios.get('http://localhost:9000/user-data');

        console.log(response)
    }

    render(){
        return(
            <h1>STOP LOOKING AT MY HOODIE!</h1>
        )
    }

}

export default Test