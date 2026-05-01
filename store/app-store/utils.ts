type Variant = "info" | "buy" | "sell";

interface IActions {
  reset: () => void;
  setFilter: (payload: string) => void;
  setInstrument: (payload: string, variant?: Variant) => void;
  toggleOpen: () => void;
  toggleFullScreen: () => void;
}

interface IState {
  filter: string;
  filterSlug: string;

  instrument: string | null;
  instrumentShort: string | null;

  variant: Variant;
  open: boolean;
  fullScreen: boolean;
}

export const defaultState: IState = {
  filter: "All Popular",
  filterSlug: "all-popular",

  instrument: null,
  instrumentShort: null,

  variant: "info",
  open: false,
  fullScreen: false,
};

export type StoreType = IActions & IState;
