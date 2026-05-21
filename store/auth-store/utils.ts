import { AuthResponseDto } from "@/app/api/auth/types";

interface IActions {
  reset: () => void;
  _setHasHydrated: (p: boolean) => void;
  setSession: (payload: AuthResponseDto) => void;
}

interface IState {
  _hasHydrated: boolean;
  session: null | AuthResponseDto;
}

export const defaultState: IState = {
  _hasHydrated: false,
  session: null,
};

export type StoreType = IActions & IState;
