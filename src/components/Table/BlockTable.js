import React from 'react'
import './Table.css'
import { Table } from 'react-bootstrap'
import Block from './Block'


const BlockTable = () => (
    <div className={"table-container"}>
        <Table className={"block-table"} striped bordered condensed hover>
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <Block/>
            <Block/>
            <Block/>
            </tbody>
        </Table>
    </div>
)

export default BlockTable