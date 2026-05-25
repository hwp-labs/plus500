import { BaseEntity } from "../types";

export interface TransactionEntity extends BaseEntity {
  email: string;
  amount: number;
  wallet?: string; 
  receipt?: string; // filename or base64
  type: number; // "withdraw" | "deposit";
  status: number; //"pending" | "approved";
}

export type CreateTransactionDto = Omit<TransactionEntity, keyof BaseEntity>;

export type UpdateTransactionDto = Pick<TransactionEntity, "status">;
