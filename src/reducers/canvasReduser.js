import { CHANGE_CANVAS_STATE, CanvasStateTypes } from '../actions/index'
const { CLOSED } = CanvasStateTypes


export function canvasReducer(state = CLOSED, action) {
    switch (action.type) {
        case CHANGE_CANVAS_STATE:
            return action.canvasState
        default:
            return state
    }
}