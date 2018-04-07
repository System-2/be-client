import React from 'react'
import PropTypes from 'prop-types'
import './MenuButton.css'


const MenuButton = ({open, onClick }) => (
    <div
        className="menu"
        onClick={onClick}
    >
        <div className={"hambergerIcon "+ open}>
        </div>
    </div>
)

MenuButton.propTypes = {
    open: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

/*
class MenuButton extends Component {
    constructor(props) {
        super(props);
        this.state = {open: ""};
        this.click = this.click.bind(this);
    }

    click(){
        let className = (this.state.open==="")?"open":"";
        this.setState({open: className});}
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
*/
export default MenuButton