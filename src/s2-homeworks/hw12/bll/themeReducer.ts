const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeActionType): StateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {
                ...state, themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any

export type ChangeThemeActionType = {
    type: 'SET_THEME_ID',
    id: number
}
export type StateType = {
    themeId: number
}