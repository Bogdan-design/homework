
type ChangeThemeIdType = {
    type:string
    id:number
}

type InitStateType={
    themeId: number
}

const initState:InitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':{
            return {...state,themeId:action.id}
        }

        default:
            return state
    }
}



export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
