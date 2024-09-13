import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = state.map(item => {
                return {...item}})
            return newState.sort((a, b) => {
                if  (action.payload === 'down') {
                    return 0 - a.name.localeCompare(b.name)
                }  else {
                    return 0 - b.name.localeCompare(a.name)
                }
            })
        }
        case 'check': {

            return state.filter(item => item.age >= action.payload)
        }
        default:
            return state
    }
}
