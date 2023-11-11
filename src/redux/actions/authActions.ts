import { ID, account } from "../../lib/appwrite/appwrite"

export const registerStart = () => ({
  type: 'REGISTER_START',
});

export const registerSuccess = () => ({
  type: 'REGISTER_SUCCESS',
});

export const registerFailure = (error: string) => ({
  type: 'REGISTER_FAILURE',
  payload: error,
});

export const loginStart = () => ({
    type: 'LOGIN_START',
  });
  
  export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS',
  });
  
  export const loginFailure = (error: string) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });

  export const getAccountDataStart = () => ({
    type: 'GET_ACCOUNT_DATA_START',
  });
  
  export const getAccountDataSuccess = (data: any) => ({
    type: 'GET_ACCOUNT_DATA_SUCCESS',
    payload: data,
  });
  
  export const getAccountDataFailure = (error: string) => ({
    type: 'GET_ACCOUNT_DATA_FAILURE',
    payload: error,
  });

export const registerUser = ( email: string, password: string, name: string) => async (dispatch: any) => {
  try {
    dispatch(registerStart());

    await account.create(ID.unique(), email, password, name);

    dispatch(registerSuccess());
  } catch (error: any) {
    dispatch(registerFailure(error.message));
  }
};

export const loginUser = (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch(loginStart());

      await account.createEmailSession(email, password);
  
      dispatch(loginSuccess());
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };
  
  export const logoutUser = () => async (dispatch: any) => {
    try {
      await account.deleteSession('current');
  
      // Опционально: очистите локальное хранилище или куки, используемые для хранения токена доступа
  
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (error) {
      // Обработка ошибок при логауте, если необходимо
    }
  };

  export const getAccountData = () => async (dispatch: any) => {
    try {
      dispatch(getAccountDataStart());
  
      const accountInfo = await account.get();
      console.log(accountInfo)
  
      dispatch(getAccountDataSuccess(accountInfo));
    } catch (error: any) {
      dispatch(getAccountDataFailure(error.message));
    }
  };