interface State {
    isFilter: boolean
}

const initialState: State = {
    isFilter: false,
};

const filterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'OPEN_FILTER':
            return {
                ...state,
                isFilter: true,
            };

        case 'CLOSE_FILTER':
            return {
                ...state,
                isFilter: false,
            };

        default:
            return state;
    }
};

export default filterReducer;