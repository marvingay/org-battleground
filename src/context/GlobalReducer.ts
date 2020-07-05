import { GlobalActions, InitialStateType, Types } from '../types';

export default (state: InitialStateType, action: GlobalActions) => {
  switch (action.type) {
    case Types.ShowDisplayForm:
      return {
        ...state,
        ...action.payload,
      };
    case Types.RemoveDisplayForm:
      return {
        ...state,
        showDisplayForm: false,
      };
    case Types.SetAuthenticated:
      return {
        ...state,
        authenticated: true,
      };
    case Types.RemoveAuthenticated:
      return {
        ...state,
        authenticated: false,
      };
    case Types.SetUser:
      return {
        ...state,
        ...action.payload,
      };
    case Types.RemoveUser:
      return {
        ...state,
        user: '',
      };
    default:
      return state;
  }
};
