export const setNavigationActiveListAction = (name: string) => ({
    type: 'SET_NAVIGATION_ACTIVE_LIST',
    payload: name,
  });  

export const setAccountNavigationActiveListAction = (text: string) => ({
    type: 'SET_ACCOUNT_NAVIGATION_ACTIVE_LINK',
    payload: text,
  });  

  export const setNavigationActiveList = (name: string) => async (dispatch: any) => {
    sessionStorage.setItem('currentList', name);
    const sessionList = sessionStorage.getItem('currentList');
    if (sessionList) {
      if (sessionList) {
        dispatch(setNavigationActiveListAction(sessionList));
      } else {
        dispatch(setNavigationActiveListAction(name));
      }
    }
  };

  export const setAccountNavigationActiveList = (text: string) => async (dispatch: any) => {
    dispatch(setAccountNavigationActiveListAction(text))
  };
