import {createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase";

export const registerStartAction = () => ({
  type: 'REGISTER_START',
});

export const startResetPasswordAction = () => ({
  type: 'START_RESET_PASSWORD',
});

export const resetPasswordSuccessAction = () => ({
  type: 'RESET_PASSWORD_SUCCESS',
});


export const resetPasswordFailureAction = (error: string) => ({
  type: 'RESET_PASSWORD_FAILURE',
  payload: error,
});

export const registerSuccessAction = () => ({
  type: 'REGISTER_SUCCESS',
});

export const registerFailureAction = (error: string) => ({
  type: 'REGISTER_FAILURE',
  payload: error,
});

export const loginStartAction = () => ({
  type: 'LOGIN_START',
});

export const loginSuccessAction = () => ({
  type: 'LOGIN_SUCCESS',
});

export const loginFailureAction = (error: string) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const getAccountDataStartAction = () => ({
  type: 'GET_ACCOUNT_DATA_START',
});

export const getAccountDataSuccessAction = (data: any) => ({
  type: 'GET_ACCOUNT_DATA_SUCCESS',
  payload: data,
});

export const getAccountDataFailureAction = (error: string) => ({
  type: 'GET_ACCOUNT_DATA_FAILURE',
  payload: error,
});

export const setUserAction = (user: any) => ({
  type: 'SET_USER',
  payload: user,
});

export const registerUser = (email: string, password: string, name: string) => async (dispatch: any) => {
  try {
    dispatch(registerStartAction());

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: name,
    });
    dispatch(registerSuccessAction());
  } catch (error: any) {
    dispatch(registerFailureAction(error.message));
  }
};

  export const loginUser = (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch(loginStartAction());
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(setUserAction(user))
      dispatch(loginSuccessAction())
    } catch (error: any) {
      dispatch(loginFailureAction(error.message));
    }
  };

  export const resetPassword = (email: string) => async (dispatch: any) => {
    try {
      dispatch(startResetPasswordAction());
      await sendPasswordResetEmail(auth, email)
      dispatch(resetPasswordSuccessAction())
    } catch (error: any) {
      console.log(error)
      dispatch(resetPasswordFailureAction(error.message));
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
