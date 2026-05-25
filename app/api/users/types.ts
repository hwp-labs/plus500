import { BaseEntity } from "../types";

export interface UserEntity extends BaseEntity {
  email: string;
  password: string;
  available?: number;
  equity?: number;
  i_margin?: number;
  m_margin?: number;
  profit_loss?: number;
  wallet?: string;
}

export type CreateUserDto = Pick<UserEntity, "email" | "password">;

export type UpdateUserDto = Pick<
  UserEntity,
  "available" | "equity" | "i_margin" | "m_margin" | "profit_loss" | "wallet"
>;
