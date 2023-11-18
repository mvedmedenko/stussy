export const openSearchAction = () => ({
  type: 'OPEN_SEARCH',
});

export const closeSearchAction = () => ({
    type: 'CLOSE_SEARCH',
  });

export const openSearch = () => (dispatch: any) => {
    dispatch(openSearchAction())
}

export const closeSearch = () => (dispatch: any) => {
    dispatch(closeSearchAction())
}

