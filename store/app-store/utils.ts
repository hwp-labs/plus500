type Variant = "info" | "buy" | "sell";

interface IActions {
  reset: () => void;
  setFilter: (payload: string) => void;
  setInstrument: (instrument: string, variant?: Variant) => void;
  setVariant: (payload: Variant) => void;
  toggleBackToInfo: () => void;
  toggleOpen: () => void;
  toggleStar: () => void;
  toggleAlert: () => void;
  toggleFullScreen: () => void;
}

interface IState {
  filter: string;
  filterSlug: string;

  instrument: string | null;
  instrumentShort: string | null;
  variant: Variant;
  backToInfo: boolean;
  open: boolean;
  star: boolean;
  alert: boolean;

  fullScreen: boolean;
}

export const defaultState: IState = {
  filter: "All Popular",
  filterSlug: "all-popular",

  instrument: null,
  instrumentShort: null,
  variant: "info",
  backToInfo: false,
  open: false,
  star: false,
  alert: false,

  fullScreen: false,
};

export type StoreType = IActions & IState;
