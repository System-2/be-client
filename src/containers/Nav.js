import { connect } from 'react-redux'
import Nav from '../components/Header/Nav'

const getNextButtonState = ( state, menu) => {
    switch (menu) {
        case 'OPENED':
            return 'CLOSED'
        case 'CLOSED':
            return 'OPENED'
        default:
            throw new Error('unknown menu state: '+ menu)
    }
}

const mapStateToProps = (state) => ({
   menutrigger: getNextButtonState(state.menutrigger, state.menu)
})

export default connect(
    mapStateToProps
)(Nav)