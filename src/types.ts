// Context, Initial State types

export type Props = {
  children: React.ReactNode;
};

interface MetaInfo {
  title: string;
  mobileMenu: boolean;
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
  GetMessages = 'GET_MESSAGES',
  SetMessages = 'SET_MESSAGES',
  SetMsgThreads = 'SET_MESSAGE_THREADS',
  SetActiveThread = 'SET_ACTIVE_THREAD',
  SetNotifications = 'SET_NOTIFICATIONS',
  SetNotificationCount = 'SET_NOTIFICATION_COUNT',
  RemoveUser = 'REMOVE_USER',
  SetPageTitle = 'SET_PAGE_TITLE',
  ToggleMobileMenu = 'TOGGLE_MOBILE_MENU',
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
  };
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
  // User Messages
  [Types.GetMessages]: {
    getMessages: boolean;
  };
  [Types.SetMessages]: {
    messages: DirectMessage[];
  };
  [Types.SetMsgThreads]: {
    threads: DirectMessageThreads;
  };
  [Types.SetActiveThread]: {
    activeThread: DirectMessage[];
  };
  [Types.SetNotifications]: {
    notifications: Notification[];
  };
  [Types.SetNotificationCount]: {
    notificationCount: number;
  };
  // Meta
  [Types.SetPageTitle]: {
    meta: MetaInfo;
  };
  [Types.ToggleMobileMenu]: {
    meta: MetaInfo;
  };
  // announcements
  [Types.SetAnnouncements]: {
    announcements: Announcement[];
  };
};

export type GlobalActions = ActionMap<Payload>[keyof ActionMap<Payload>];

// Announcement Types

export interface Announcement {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  category: string;
  hidden: boolean;
}

// Trivia Game Types
export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answer: string[] };
export interface IQuestionObject {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  correctAnswer: string;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  total: number;
}

export interface AnswerObject {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

// Message Types
export interface SendMessage {
  sender: string;
  recipient: string;
  message: string;
}

interface MessageUser {
  _id: string;
  displayName: string;
}
export interface DirectMessage {
  id: number;
  body: string;
  seen: boolean;
  date: string;
  sender: MessageUser;
  recipient: MessageUser;
}

export interface MessageThread {
  [user: string]: DirectMessage[];
}

export type DirectMessageThreads = MessageThread[];

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
  getMessages: boolean;
  messages: DirectMessage[];
  threads: DirectMessageThreads;
  activeThread: DirectMessage[];
  notifications: Notification[];
  notificationCount: number;
}
