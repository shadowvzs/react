const listReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'REMOVE':
            const newState = [...state];
            newState.splice(action.payload, 1);
            return state.filter((e, i) => i !== action.payload);
        default:
            return state;
        
    }
}

export default listReducer;