interface IActions {
  reset: () => void;
  toggleDrawer: () => void;
}

interface IState {
  drawer: boolean;
}

export const defaultState: IState = {
  drawer: false,
};

export type StoreType = IActions & IState;
