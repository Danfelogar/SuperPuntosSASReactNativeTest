import {AuthState} from './AuthProvider';

type AuthActionType =
  | {type: '[Auth] - Login'; payload: string}
  | {type: '[Auth] - Logout'}
  | {type: '[Auth] - Block Login'};

export const authReducer = (
  state: AuthState,
  action: AuthActionType,
): AuthState => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLoggedIn: 'login',
        userToken: action.payload,
      };
    case '[Auth] - Logout':
      return {
        ...state,
        isLoggedIn: 'logout',
        userToken: undefined,
      };
    case '[Auth] - Block Login':
      return {
        ...state,
        isLoggedIn: 'logout',
      };

    default:
      return state;
  }
};
