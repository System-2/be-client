/*
 * типы действий
 */

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const CHANGE_CANVAS_STATE = 'CHANGE_CANVAS_STATE'

/*
 * другие константы
 */

export const LanguageTypes = {
    RUSSIAN: 'RUSSIAN',
    ENGLISH: 'ENGLISH'
}

export const CanvasStateTypes = {
    OPENED: 'OPENED',
    CLOSED: 'CLOSED'
}
/*
 * генераторы действий
 */

export const SetLanguageType = language => ({
    type: CHANGE_LANGUAGE,
    language
})

export const SetCanvasStateType = canvasState => ({
    type: CHANGE_CANVAS_STATE,
    canvasState
})
