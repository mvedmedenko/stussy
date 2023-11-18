interface State {
    isSearch: boolean
}

const initialState: State = {
    isSearch: false,
};

const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'OPEN_SEARCH':
            return {
                ...state,
                isSearch: true,
            };

        case 'CLOSE_SEARCH':
            return {
                ...state,
                isSearch: false,
            };

        default:
            return state;
    }
};

export default searchReducer;