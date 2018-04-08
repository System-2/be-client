import React, { Component } from 'react'
/*
const Block= () => (
    <tr>
        <td>1</td>
        <td>Vova</td>
        <td>Zhelvis</td>
        <td>@zhel</td>
    </tr>
)


*/
class Block extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    loadData() {
        this.setState({
            data: fetch("https://api.opendota.com/api/teams/3").then(response =>response.json())
        })
    }

    componentDidMount() {
        this.loadData();
    }

    render(){
        return(
        <tr>
            <td>{this.state.data.id}</td>
            <td>{this.state.data.deaths}</td>
            <td>{this.state.data.kills}</td>
            <td>{this.state.data.assists}</td>
        </tr>
        );
    }
}

export default Block