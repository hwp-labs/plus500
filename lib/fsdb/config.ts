export const DB_PATH = "lib/fsdb/data";

type BaseApiResponse = {
  status: number;
  success: boolean;
};

type ApiResponse<T> = ({ data: T } | { message: string }) & BaseApiResponse;

export type IApiResponse<T> = Promise<ApiResponse<T>>;

export interface BaseEntity {
  id: string; // uuid
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
}

export interface IAdmin extends BaseEntity {
  email: string;
  password: string;
  btc?: string;
  eth?: string;
  usdt?: string;
  usdc?: string;
}

export type CreateAdminDto = Omit<IAdmin, keyof BaseEntity>;
export type UpdateAdminDto = Pick<IAdmin, "btc" | "eth" | "usdt" | "usdc">;

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
  receipt: string; // base64
  type: 0 | 1; // "dr" | "cr";
  status: 0 | 1; //"pending" | "approved";
}

export type CreateTransactionDto = Omit<ITransaction, keyof BaseEntity>;
export type UpdateTransactionDto = Pick<ITransaction, "status">;
