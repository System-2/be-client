import { connect } from 'react-redux'
import { SetLanguageType } from '../actions/index'
import LangButton from '../components/Header/LangButton'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.language === state.lang
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(SetLanguageType(ownProps.language))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LangButton)