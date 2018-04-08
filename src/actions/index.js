//import axios from 'axios'




export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
export const CHANGE_CANVAS_STATE = 'CHANGE_CANVAS_STATE'

export const LanguageTypes = {
    RUSSIAN: 'RUSSIAN',
    ENGLISH: 'ENGLISH'
}

export const CanvasStateTypes = {
    OPENED: 'OPENED',
    CLOSED: 'CLOSED'
}

export const SetLanguageType = language => ({
    type: CHANGE_LANGUAGE,
    language
})

export const SetCanvasStateType = canvasState => ({
    type: CHANGE_CANVAS_STATE,
    canvasState
})

// axios
/*
export let startFetch = () => {
    return {
        type : 'START_FETCH'
    }
}

export let endFetch = (Array) => {
    return {
        type : 'END_FETCH',
        Array
    }
}


let fetchBlock = () => {
    let url = "http://localhost:13445/api/v1/txns/20/1"
    return (dispatch) => {
        dispatch(startFetch())
        return axios.get(url).then(
            (response) => {
                console.log(response.data)
                console.log(response.status)
                console.log(response.statusText)
                console.log(response.headers)
                console.log(response.config)
                let blocksArr = response.data.items
                dispatch(endFetch(blocksArr))
            },
            (err) => {
                console.log(err);
            }
        )
    }
}

export default fetchBlock
*/