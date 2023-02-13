import {UserType} from '../HW8'

// type ActionType =
//     | { type: 'sort'; payload: 'up' | 'down' }
//     | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: NewActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // by name

            return action.payload === 'up' ? [...state].sort((a,b)=>a.name.localeCompare(b.name))
                : action.payload === 'down'? [...state].sort((a,b)=>b.name.localeCompare(a.name))
                    : ''// need to fix
        }
        case 'check': {

            return action.payload === 18 ? state.filter(el=>el.age>=18) : ''// need to fix
        }
        default:
            return state
    }
}

type NewActionType = SortACtype | Check18ACtype

type SortACtype = ReturnType<typeof sortAC>

export const sortAC=(payload: 'up' | 'down') =>{
    return {
        type: 'sort',
        payload
    }as const
}

type Check18ACtype = ReturnType<typeof check18AC>

export const check18AC =(payload: number) =>{
    return {
        type: 'check',
        payload
    }as const
}



