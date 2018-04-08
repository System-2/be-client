import React, { Component } from 'react'
import './Table.css'
import { Table } from 'react-bootstrap'

import axios from 'axios';

class BlockTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:13445/api/v1/txns/20/1').then(res => {
                const posts = res.data;
                this.setState({ posts });
            });
    }

    render() {
        const data = this.state.posts;

        let tableTemplate;

        function makeColumns(block) {
            return<React.Fragment>
                    <td>{block.txn}</td>
                    <td>{block.block}</td>
                    <td>{block.from}</td>
                    <td>{block.to}</td>
                    <td>{block.value}</td>
                </React.Fragment>
        }

        tableTemplate = data.map((row, i) => {
            return <tr className="block-elem" key={i}>{makeColumns(row)}</tr>
        })

        return (
            <div className={"table-container"}>
                <Table className={"block-table"} striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>txn</th>
                        <th>block</th>
                        <th>from</th>
                        <th>to</th>
                        <th>value</th>
                    </tr>
                    </thead>
                    <tbody>
                      {tableTemplate}
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default BlockTable
