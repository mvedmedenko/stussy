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
    console.log(sessionList)
    if (sessionList) {
      if (sessionList) {
        dispatch(setNavigationActiveListAction(sessionList));
        console.log("true")
      } else {
        console.log("else")
        dispatch(setNavigationActiveListAction(name));
      }
    }
  };

  export const setAccountNavigationActiveList = (text: string) => async (dispatch: any) => {
    dispatch(setAccountNavigationActiveListAction(text))
  };
