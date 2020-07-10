import { GlobalActions, InitialStateType, Types } from '../types';

export default (state: InitialStateType, action: GlobalActions) => {
  switch (action.type) {
    // Authentication Dispatch
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
        user: { ...state.user, ...action.payload } 
      };
    case Types.RemoveUser:
      return {
        ...state,
        user: { ...state.user, name: '', }
      };
    // Meta Dispatch
    case Types.SetPageTitle:
      return {
        ...state,
        ...action.payload,
      }
    // Announcement Dispatch
    case Types.SetAnnouncements:
      return {
        ...state,
        announcements: action.payload.announcements,
      }
    default:
      return state;
  }
};
