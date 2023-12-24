interface State {
    selectedSize: string,
    isBag: boolean
    items: any
}

const initialState: State = {
    selectedSize: "",
    isBag: false,
    items: []
};

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_SELECTED_SIZE':
            return {
                ...state,
                selectedSize: action.payload,
            };

        case 'OPEN_BAG':
            return {
                ...state,
                isBag: true,
            };

        case 'CLOSE_BAG':
            return {
                ...state,
                isBag: false,
            };


        case 'SET_CART_DATA_FROM_FIREBASE':
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
};

export default cartReducer;