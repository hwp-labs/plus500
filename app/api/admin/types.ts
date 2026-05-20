import { BaseEntity } from "../types";

export interface AdminEntity extends BaseEntity{
  email: string;
  password: string;
  btc?: string;
  eth?: string;
  usdt?: string;
  usdc?: string;
}

export type UpdateAdminDto = Pick<AdminEntity, "btc" | "eth" | "usdt" | "usdc">;
