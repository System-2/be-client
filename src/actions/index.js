/*
 * типы действий
 */

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

/*
 * другие константы
 */

export const LanguageTypes = {
    RUSSIAN: 'RUSSIAN',
    ENGLISH: 'ENGLISH'
}

/*
 * генераторы действий
 */

export const SetLanguageType = language => ({
    type: CHANGE_LANGUAGE,
    language
})

