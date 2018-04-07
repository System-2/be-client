import { CHANGE_LANGUAGE, LanguageTypes } from '../actions/index'
const { RUSSIAN } = LanguageTypes


export function languageReducer(state = RUSSIAN, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return action.language
        default:
            return state
    }
}