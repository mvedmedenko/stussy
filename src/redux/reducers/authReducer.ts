interface State {
    loading: boolean;
    error: string | null;
    resetError: string | null
    isAuth: boolean;
    user: any
}

const initialState: State = {
    loading: false,
    error: null,
    resetError: null,
    isAuth: false,
    user: []
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'REGISTER_START':
            return {
                ...state,
                loading: true,
                error: null,
            };

        case 'START_RESET_PASSWORD':
            return {
                ...state,
                loading: true,
                resetError: null,
            };

        case 'RESET_PASSWORD_SUCCESS':
            return {
                ...state,
                loading: false,
                resetError: null,
            };

        case 'RESET_PASSWORD_FAILURE':
            return {
                ...state,
                loading: false,
                resetError: action.payload,
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

        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};

export default authReducer;