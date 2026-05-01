import { create } from "zustand";
import {
  devtools,
  persist,
  subscribeWithSelector,
  createJSONStorage,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { slugify } from "@/utils";

const name = "app-store";

const defaultState: IState = {
  filter: "All Popular",
  filterSlug: "all-popular",

  instrument: null,
  instrumentShort: null,

  variant: "info",
  open: false,
  fullScreen: false,
};

interface IState {
  filter: string;
  filterSlug: string;

  instrument: string | null;
  instrumentShort: string | null;

  variant: "info" | "buy" | "sell";
  open: boolean;
  fullScreen: boolean;
}

interface IActions {
  setFilter: (payload: string) => void;
  setInstrument: (payload: string) => void;
  setVariant: (payload: IState["variant"]) => void;
  toggleOpen: () => void;
  toggleFullScreen: () => void;
}

type StoreType = IState & IActions;

export const APP_STORE = defaultState;

export const useAppStore = create<StoreType>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer<StoreType>((set) => ({
          ...defaultState,

          setFilter: (p) =>
            set((s) => {
              s.filter = p;
              s.filterSlug = slugify(p);
            }),

          setInstrument: (p) =>
            set((s) => {
              const [value, label] = p.split("|"); // "AMZN|Amazon"
              s.instrument = label || value;
              s.instrumentShort = value;
            }),

          setVariant: (p) =>
            set((s) => {
              s.variant = p;
            }),

          toggleOpen: () =>
            set((s) => {
              s.open = !s.open;
            }),

          toggleFullScreen: () =>
            set((s) => {
              s.fullScreen = !s.fullScreen;
            }),
        })),
      ),
      { name, storage: createJSONStorage(() => sessionStorage) },
    ),
    { enabled: process.env.NODE_ENV === "development" },
  ),
);
