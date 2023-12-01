export const openChatAction = () => ({
    type: 'OPEN_CHAT',
  });
  
  export const closeChathAction = () => ({
      type: 'CLOSE_CHAT',
    });
  
  export const openChat = () => (dispatch: any) => {
      dispatch(openChatAction())
  }
  
  export const closeChat = () => (dispatch: any) => {
      dispatch(closeChathAction())
  }
  
  