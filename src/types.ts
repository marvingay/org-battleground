// Context, Initial State types

export type Props = {
  children: React.ReactNode;
};

interface MetaInfo {
  title: string;
}
export interface InitialStateType {
  authenticated: boolean;
  authToken: string;
  showDisplayForm: boolean;
  showMsgForm: boolean;
  user: User;
  meta: MetaInfo; 
  announcements: Announcement[];
}

// Reducer Types

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  ShowDisplayForm = 'SET_DISPLAY_FORM',
  RemoveDisplayForm = 'REMOVE_DISPLAY_FORM',
  ShowMsgForm = 'SHOW_MSG_FORM',
  RemoveMsgForm = 'REMOVE_MSG_FORM',
  SetAuthenticated = 'SET_AUTHENTICATED',
  RemoveAuthenticated = 'REMOVE_AUTHENTICATED',
  SetUser = 'SET_USER',
  SetNotifications = 'SET_NOTIFICATIONS',
  RemoveUser = 'REMOVE_USER',
  SetPageTitle = 'SET_PAGE_TITLE',
  SetAnnouncements = 'SET_ANNOUNCEMENTS',
}

export type Payload = {
  // Authentication 
  [Types.ShowDisplayForm]: {
    showDisplayForm: boolean;
  };
  [Types.RemoveDisplayForm]: {
    showDisplayForm: boolean;
  };
  [Types.ShowMsgForm]: {
    showMsgForm: boolean;
  };
  [Types.RemoveMsgForm]: {
    showMsgForm: boolean;
  }
  [Types.SetAuthenticated]: {
    authenticated: boolean;
  };
  [Types.RemoveAuthenticated]: {
    authenticated: boolean;
  };
  [Types.SetUser]: {
    user: User;
  };
  [Types.RemoveUser]: {
    user: User;
  };
  [Types.SetNotifications]: {
    notifications: Notification[];
  }
  // Meta
  [Types.SetPageTitle]: {
    meta: MetaInfo;
  }
  // announcements
  [Types.SetAnnouncements]: {
    announcements: Announcement[];
  }
};

export type GlobalActions = ActionMap<Payload>[keyof ActionMap<Payload>];

// Announcement Types

export interface Announcement {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  hidden: boolean;
}

// Message Types
export interface SendMessage {
  sender: string;
  recipient: string;
  message: string;
}

export interface Notification {
  id: string;
  type: string;
  message: string;
  read: boolean;
}

// user types
// * This will be expanded later as necessary
export interface User {
  name: string;
  notifications: Notification[];
}