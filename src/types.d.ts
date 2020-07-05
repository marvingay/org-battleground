// Context, Initial State types

 type Props = {
  children: React.ReactNode;
};

 interface InitialStateType {
  authenticated: boolean;
  authToken: string;
  showDisplayForm: boolean;
  user: string;
}

// Reducer Types

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

 enum Types {
  ShowDisplayForm = 'SET_DISPLAY_FORM',
  RemoveDisplayForm = 'REMOVE_DISPLAY_FORM',
  SetAuthenticated = 'SET_AUTHENTICATED',
  RemoveAuthenticated = 'REMOVE_AUTHENTICATED',
  SetUser = 'SET_USER',
  RemoveUser = 'REMOVE_USER',
}

type Payload = {
  [Types.ShowDisplayForm]: {
    showDisplayForm: boolean;
  };
  [Types.RemoveDisplayForm]: {
    showDisplayForm: boolean;
  };
  [Types.SetAuthenticated]: {
    authenticated: boolean;
  };
  [Types.RemoveAuthenticated]: {
    authenticated: boolean;
  };
  [Types.SetUser]: {
    user: string;
  };
  [Types.RemoveUser]: {
    user: string;
  };
};

 type GlobalActions = ActionMap<Payload>[keyof ActionMap<Payload>];
