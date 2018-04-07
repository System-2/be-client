import { connect } from 'react-redux'
import { SetCanvasStateType } from '../actions/index'
import { OffCanvas }  from 'react-offcanvas'

const getMenuState = (state, menu) => {
    switch (menu) {
        case 'OPENED':
            return true
        case 'CLOSED':
            return false
        default:
            throw new Error('unknown menu state: '+ menu)
    }
}


const mapStateToProps = (state) => ({
    isMenuOpened: getMenuState(state.isMenuOpened, state.menu)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    SetCanvasStateType: canvasState => dispatch(SetCanvasStateType(canvasState))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OffCanvas)