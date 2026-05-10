interface IActions {
  reset: () => void;
  setDeposit: (payload: boolean) => void;
  toggleDeposit: () => void;
  setWithdraw: (payload: boolean) => void;
  toggleWithdraw: () => void;
}

interface IState {
  deposit: boolean;
  withdraw: boolean;
}

export const defaultState: IState = {
  deposit: false,
  withdraw: false,
};

export type StoreType = IActions & IState;
