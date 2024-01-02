interface State {
    selectedSize: string,
    isBag: boolean
    items: any
    isRequesting: boolean
}

const initialState: State = {
    selectedSize: "",
    isBag: false,
    items: [],
    isRequesting: false,
};

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {

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

        case 'CLEAR_STORE_CART':
            return {
                ...state,
                items: [],
            };

        case 'SET_CART_FROM_LOCAL_STORAGE':
            return {
                ...state,
                items: action.payload,
            };

        case 'START_REQUESTING_STATUS':
            return {
                ...state,
                isRequesting: true,
            };

        case 'STOP_REQUESTING_STATUS':
            return {
                ...state,
                isRequesting: false,
            };

        default:
            return state;
    }
};

export default cartReducer;