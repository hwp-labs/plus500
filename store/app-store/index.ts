import { create } from "zustand";
import {
  devtools,
  persist,
  subscribeWithSelector,
  createJSONStorage,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { slugify } from "@/utils";
//
import { defaultState, StoreType } from "./utils";

const name = "app-store";

export const APP_STORE = defaultState;

export const useAppStore = create<StoreType>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer<StoreType>((set) => ({
          ...defaultState,

          reset: () => set(defaultState),

          setFilter: (p) =>
            set((s) => {
              s.filter = p;
              s.filterSlug = slugify(p);
            }),

          setInstrument: (i, v) =>
            set((s) => {
              const [value, label] = i.split("|"); // "AMZN|Amazon"
              s.instrument = label || value;
              s.instrumentShort = value;
              s.variant = v || "info";
              s.open = true;
            }),

          setVariant: (p) =>
            set((s) => {
              s.variant = p;
            }),

          toggleBackToInfo: () =>
            set((s) => {
              s.backToInfo = !s.backToInfo;
            }),

          toggleOpen: () =>
            set((s) => {
              s.open = !s.open;

              if (!s.open) s.variant = "info";
            }),
          
          toggleStar: () =>
            set((s) => {
              s.star = !s.star;
            }),

          toggleAlert: () =>
            set((s) => {
              s.alert = !s.alert;
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
