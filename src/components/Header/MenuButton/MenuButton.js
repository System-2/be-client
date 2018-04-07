import React, { Component } from 'react'
import './MenuButton.css'

class MenuButton extends Component {
    constructor(props) {
        super(props);
        this.state = {open: ""};
        this.click = this.click.bind(this);
    }

    click(){
        let className = (this.state.open==="")?"open":"";
        this.setState({open: className});
    }

    render() {
        return (
            <div
                className="menu"
                onClick={this.click}
            >
                <div className={"hambergerIcon "+ this.state.open}>
                </div>
            </div>
        )
    }
}

export default MenuButton