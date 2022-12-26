import { types } from "../types"

const initialState = {
    value: '',
    prev: 0,
    numbers: []
}

export default function countReducer (state= initialState, action){

    switch (action.type) {
        case types.CHANGE_INPUT:
            return {
                ...state,
                value: action.payload,
                prev: [...state.numbers.slice(-1)]
            }       
        case types.ADD_NUMBER:
            return {
                ...state,
                numbers: [...state.numbers, +state.prev + +state.value],
                value: ''
            }
        case types.CLEAR_NUMBER:
            return{
                ...state,
                value: '',
                numbers: []
            }
        default:
            return state
    }

    
}