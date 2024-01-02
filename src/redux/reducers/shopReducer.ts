interface State {
    products: [],
    loading: boolean;
    error: string | null;
    selectedSize: string,
    selectedItem: any
}

const initialState: State = {
    products: [],
    loading: false,
    error: null,
    selectedSize: "",
    selectedItem: {},
};

const shopReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case 'GET_PRODUCTS_START':
            return {
                ...state,
                loading: true,
                error: null,
            };

        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
            };

        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };

        case 'GET_PRODUCTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case 'SET_SELECTED_SIZE':
            return {
                ...state,
                selectedSize: action.payload,
            };

            case 'GET_SELECTED_ITEM':
                return {
                    ...state,
                    selectedItem: action.payload,
                };

        default:
            return state;
    }
};

export default shopReducer;