export const openFilterAction = () => ({
    type: 'OPEN_FILTER',
});

export const closeFilterAction = () => ({
    type: 'CLOSE_FILTER',
});


export const openFilter = () => (dispatch: any) => {
    dispatch(openFilterAction())
}

export const closeFilter = () => (dispatch: any) => {
    dispatch(closeFilterAction())
}