interface State {
    navigationActiveList: string,
    accountNavigationActiveList: string
}

const initialState: State = {
    navigationActiveList: "main",
    accountNavigationActiveList: "account"
};

const headerReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case 'SET_NAVIGATION_ACTIVE_LIST':
            return {
                ...state,
                navigationActiveList: action.payload,
            };
        case 'SET_ACCOUNT_NAVIGATION_ACTIVE_LINK':
            return {
                ...state,
                accountNavigationActiveList: action.payload,
            };

        default:
            return state;
    }
};

export default headerReducer;