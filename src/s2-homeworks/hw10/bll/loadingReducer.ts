import {AppStoreType} from "./store";

export type InitStateType ={
    isLoading:boolean
}


const initState:InitStateType= {
    isLoading: false,
}



export const loadingReducer = (state = initState, action: LoadingActionType):boolean=> { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':{
            let newState = {...state,isLoading:action.isLoading}
            // newState.isLoading = action.isLoading
            return newState.isLoading
        }
        // пишет студент  // need to fix

        default:
            return state.isLoading = false
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
