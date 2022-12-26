import { types } from "./types";


export function changeValueAction (value) {
    return{
        type: types.CHANGE_INPUT,
        payload: value
    }
}

export function addNumberAction () {
    return {
        type: types.ADD_NUMBER
    }
}

export function clearNumberAction (){
    return {
        type: types.CLEAR_NUMBER
    }
}


