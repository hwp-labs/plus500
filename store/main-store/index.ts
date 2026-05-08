import { create } from "zustand";
import {
  devtools,
  persist,
  subscribeWithSelector,
  createJSONStorage,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
//
import { defaultState, StoreType } from "./utils";

const name = "main-store";

export const MAIN_STORE = defaultState;

export const useMainStore = create<StoreType>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer<StoreType>((set) => ({
          ...defaultState,

          reset: () => set(defaultState),

          toggleDrawer: () =>
            set((s) => {
              s.drawer = !s.drawer;
            }),
        })),
      ),
      { name, storage: createJSONStorage(() => sessionStorage) },
    ),
    { enabled: process.env.NODE_ENV === "development" },
  ),
);
