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

const name = "funds-store";

export const FUNDS_STORE = defaultState;

export const useFundsStore = create<StoreType>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer<StoreType>((set) => ({
          ...defaultState,

          reset: () => set(defaultState),

          toggleDeposit: () =>
            set((s) => {
              s.deposit = !s.deposit;
            }),
         
          toggleWithdraw: () =>
            set((s) => {
              s.withdraw = !s.withdraw;
            }),
        })),
      ),
      { name, storage: createJSONStorage(() => sessionStorage) },
    ),
    { enabled: process.env.NODE_ENV === "development" },
  ),
);
