import { BaseEntity } from "@/types/api-type";

export const DB_PATH = "lib/fsdb/data";

export interface IAdmin {
  email: string;
  password: string;
  btc?: string;
  eth?: string;
  usdt?: string;
  usdc?: string;
}

export type UpdateAdminDto = Omit<IAdmin, "email" | "password">;

export interface IUser extends BaseEntity {
  email: string;
  password: string;
  available?: number;
  equity?: number;
  i_margin?: number;
  m_margin?: number;
  profit_loss?: number;
}

export type CreateUserDto = Omit<IUser, keyof BaseEntity>;
export type UpdateUserDto = Pick<
  IUser,
  "available" | "equity" | "i_margin" | "m_margin" | "profit_loss"
>;

export interface ITransaction extends BaseEntity {
  email: string;
  amount: number;
  receipt?: string; // base64
  type: number; // "withdraw" | "deposit";
  status: number; //"pending" | "approved";
}

export type CreateTransactionDto = Omit<ITransaction, keyof BaseEntity>;
export type UpdateTransactionDto = Pick<ITransaction, "status">;
