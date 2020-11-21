import {} from '../../redux/actionConstants'

const initialState = {}

export function savedReducer(state = initialState, action: { type: string }){
    switch(action.type){
        default:
            return state
    }
}