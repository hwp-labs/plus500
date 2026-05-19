export type InstrumentDto = {
  name: string;
  ticker: string;
  change: number;
  sell: number;
  buy: number;
  range: string;
};

type VariantDto = "info" | "buy" | "sell";

interface IActions {
  reset: () => void;
  setFilter: (payload: string) => void;
  setInstrument: (instrument: InstrumentDto, variant?: VariantDto) => void;
  setVariant: (payload: VariantDto) => void;
  toggleBackToInfo: () => void;
  toggleOpen: () => void;
  toggleStar: () => void;
  toggleAlert: () => void;
  toggleFullScreen: () => void;
}

interface IState {
  filter: string;

  instrument: InstrumentDto | null;
  variant: VariantDto;
  backToInfo: boolean;
  open: boolean;
  star: boolean;
  alert: boolean;

  fullScreen: boolean;
}

export const defaultState: IState = {
  filter: "All Popular",

  instrument: null,
  variant: "info",
  backToInfo: false,
  open: false,
  star: false,
  alert: false,

  fullScreen: false,
};

export type StoreType = IActions & IState;
