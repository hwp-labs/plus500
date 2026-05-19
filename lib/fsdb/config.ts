import { BaseEntity } from "@/types/api-type";

export const DB_PATH = "lib/fsdb/data";

export interface AdminEntity {
  email: string;
  password: string;
  btc?: string;
  eth?: string;
  usdt?: string;
  usdc?: string;
}

export type UpdateAdminDto = Omit<AdminEntity, "email" | "password">;

export interface UserEntity extends BaseEntity {
  email: string;
  password: string;
  available?: number;
  equity?: number;
  i_margin?: number;
  m_margin?: number;
  profit_loss?: number;
}

export type CreateUserDto = Omit<UserEntity, keyof BaseEntity>;
export type UpdateUserDto = Pick<
  UserEntity,
  "available" | "equity" | "i_margin" | "m_margin" | "profit_loss"
>;

export interface TransactionEntity extends BaseEntity {
  email: string;
  amount: number;
  receipt?: string; // filename or base64
  type: number; // "withdraw" | "deposit";
  status: number; //"pending" | "approved";
}

export type CreateTransactionDto = Omit<TransactionEntity, keyof BaseEntity>;
export type UpdateTransactionDto = Pick<TransactionEntity, "status">;
