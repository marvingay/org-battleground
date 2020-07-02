import { GlobalActions, InitialStateType, Types } from './types';

export default (state: InitialStateType, action: GlobalActions) => {
  switch (action.type) {
    case Types.ShowDisplayForm:
      return {
        ...state,
        ...action.payload 
      }
    case Types.RemoveDisplayForm:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  } 
};