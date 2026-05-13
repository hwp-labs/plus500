type SessionDto = {
  email: string;
  role: "admin" | "user";
};

interface IActions {
  reset: () => void;
  setSession: (payload: SessionDto) => void;
}

interface IState {
  session: null | SessionDto;
}

export const defaultState: IState = {
  session: null,
};

export type StoreType = IActions & IState;
