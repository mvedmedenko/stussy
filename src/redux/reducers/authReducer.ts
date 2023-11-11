interface State {
    loading: boolean;
    error: string | null;
    isAuth: boolean
}

const initialState: State = {
    loading: false,
    error: null,
    isAuth: false,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'REGISTER_START':
            return {
                ...state,
                loading: true,
                error: null,
            };

        case 'LOGIN_START':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
            };

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                isAuth: true,
            };

        case 'REGISTER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isAuth: false,
            };


        default:
            return state;
    }
};

export default authReducer;