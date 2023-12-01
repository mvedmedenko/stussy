interface State {
    products: [],
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    products: [],
    loading: false,
    error: null,
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

        default:
            return state;
    }
};

export default shopReducer;