import { connect } from 'react-redux'
import { SetLanguageType } from '../actions/index'
import Text from '../components/Text'

const getVisibleText = (view, text_ru, text_en, language) => {
    switch (language) {
        case 'RUSSIAN':
            return text_ru
        case 'ENGLISH':
            return text_en
        default:
            throw new Error('unknown language '+ language)
    }
}

const mapStateToProps = (state, ownProps) => ({
    view: getVisibleText( state.view, ownProps.text_ru, ownProps.text_en, state.lang),
})

const mapDispatchToProps = dispatch => ({
    SetLanguageType: language => dispatch(SetLanguageType(language))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Text)
