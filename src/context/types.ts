// Context, Initial State types

export type Props = {
  children: React.ReactNode;
};

export interface InitialStateType {
  authenticated: boolean;
  authToken: string;
  showDisplayForm: boolean;
};

// Reducer Types

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key;
   }
   : {
     type: Key;
     payload: M[Key];
   }
};

export enum Types {
  ShowDisplayForm = 'SET_DISPLAY_FORM',
  RemoveDisplayForm = 'REMOVE_DISPLAY_FORM',
  SetAuthenticated = 'SET_AUTHENTICATED',
  RemoveAuthenticated = 'REMOVE_AUTHENTICATED',
  SetAuthToken = 'SET_AUTH_TOKEN',
  RemoveAuthToken = 'REMOVE_AUTH_TOKEN'
}

type Payload = {
  [Types.ShowDisplayForm] : {
    showDisplayForm: boolean;
  };
  [Types.RemoveDisplayForm] : {
    showDisplayForm: boolean;
  }
}

export type GlobalActions = ActionMap<Payload>[keyof ActionMap<Payload>];

