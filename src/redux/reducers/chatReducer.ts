interface State {
    isChat: boolean
}

const initialState: State = {
    isChat: false,
};

const chatReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'OPEN_CHAT':
            return {
                ...state,
                isChat: true,
            };

        case 'CLOSE_CHAT':
            return {
                ...state,
                isChat: false,
            };

        default:
            return state;
    }
};

export default chatReducer;