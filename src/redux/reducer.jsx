const inicialState = 0

export const rootReducer =(state = inicialState,action)=>{
    switch (action.type) {
        case 'ACTIVE_TAB':
            return {...state,activeTab: action.payload};
    
        default:
            return state
    }
}