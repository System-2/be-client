import { connect } from 'react-redux'
import { SetCanvasStateType } from '../actions/index'
import MenuButton from '../components/Header/MenuButton/MenuButton'

const getButtonState = ( state, menu) => {
    switch (menu) {
        case 'OPENED':
            return "open"
        case 'CLOSED':
            return ""
        default:
            throw new Error('unknown menu state: '+ menu)
    }
}

const mapStateToProps = (state) => ({
    open: getButtonState(state.open, state.menu)
})

const mapDispatchToProps = (dispatch, ownProps ) => ({
    onClick: () => dispatch(SetCanvasStateType(ownProps.menu))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuButton)