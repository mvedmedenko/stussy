interface State {
    selectedSize: string,
}

const initialState: State = {
    selectedSize: ""
};

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_SELECTED_SIZE':
            return {
                ...state,
                selectedSize: action.payload,
            };

        default:
            return state;
    }
};

export default cartReducer;