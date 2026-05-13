import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
//
import { defaultState, StoreType } from "./utils";

const name = "auth-store";

export const AUTH_STORE = defaultState;

export const useAuthStore = create<StoreType>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer<StoreType>((set) => ({
          ...defaultState,

          reset: () => set(defaultState),

          setSession: (p) =>
            set((s) => {
              s.session = p;
            }),
        })),
      ),
      { name },
    ),
    { enabled: process.env.NODE_ENV === "development" },
  ),
);
