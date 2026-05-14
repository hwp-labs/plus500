export type SessionDto = {
  email: string;
  role: "admin" | "user";
};

interface IActions {
  reset: () => void;
  _setHasHydrated: (p: boolean) => void;
  setSession: (payload: SessionDto) => void;
}

interface IState {
  _hasHydrated: boolean;
  session: null | SessionDto;
}

export const defaultState: IState = {
  _hasHydrated: false,
  session: null,
};

export type StoreType = IActions & IState;
