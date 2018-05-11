import React from 'react';
import axios from 'axios';

class Test extends React.Component{

    componentDidMount(){
        this.getUserData();
        this.getArticle();
        this.sendData();
    }

    async getUserData(){
        const response = await axios.get('/api/user-data');

        console.log(response)
    }
    async getArticle(){
        const response = await axios.get('/api/get-article');

        console.log(response)
    }
    async sendData(){
        const dataToSend={
            stuff: "Sam, Pay attention!",
            morestuff: "look here, now look back at your code, Sam",
            last: "i'm on a horse"
        }

        const response = await axios.post('/api/send-data', dataToSend);

        console.log(response)
    }

    render(){
        return(
            <h1>Give Danny Money!</h1>
        )
    }

}

export default Test