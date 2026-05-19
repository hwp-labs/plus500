import { ApiResponseAsync } from "@/types/api-type";
import {
  HTTP_STATUS_CODE,
  HTTP_STATUS_TEXT,
} from "@/constants/HTTP_STATUS_CODE";
import {
  CreateTransactionDto,
  TransactionEntity,
  UpdateTransactionDto,
} from "../config";
import { MUTATION } from "../utils";
import { BaseRepository } from "./base-repository";

class TransactionRepository extends BaseRepository {
  constructor(readonly filename: string) {
    super(filename);
  }

  async getAll(email?: string | null): ApiResponseAsync<TransactionEntity[]> {
    const data = await this.read<TransactionEntity[]>();

    if (email) {
      const filtered = data.filter((row) => row.email === email);

      return {
        success: true,
        status: HTTP_STATUS_CODE.OK,
        data: filtered,
      };
    }

    return {
      success: true,
      status: HTTP_STATUS_CODE.OK,
      data,
    };
  }

  async create(req: CreateTransactionDto): ApiResponseAsync<TransactionEntity> {
    const res = await this.read<TransactionEntity[]>();

    const data = MUTATION.parse({ req }) as TransactionEntity;
    res.push(data);

    await this.write(res);
    return {
      success: true,
      status: HTTP_STATUS_CODE.CREATED,
      data,
    };
  }

  async updateStatus(
    req: UpdateTransactionDto,
    id: TransactionEntity["id"],
  ): ApiResponseAsync<TransactionEntity> {
    const res = await this.read<TransactionEntity[]>();
    const i = res.findIndex((row) => row.id === id);

    if (i === -1) {
      return {
        success: false,
        status: HTTP_STATUS_CODE.NOT_FOUND,
        message: HTTP_STATUS_TEXT.NOT_FOUND,
      };
    }

    const req_ = MUTATION.parse({ req, method: "put" });
    const data = (res[i] = {
      ...res[i],
      ...req_,
    });

    await this.write(res);
    return {
      success: true,
      status: HTTP_STATUS_CODE.OK,
      data,
    };
  }

  async delete(id: TransactionEntity["id"]): ApiResponseAsync<null> {
    const res = await this.read<TransactionEntity[]>();

    if (!res.some((row) => row.id === id)) {
      return {
        success: false,
        status: HTTP_STATUS_CODE.NOT_FOUND,
        message: HTTP_STATUS_TEXT.NOT_FOUND,
      };
    }

    const data = res.filter((row) => row.id !== id);

    await this.write(data);
    return {
      success: true,
      status: HTTP_STATUS_CODE.NO_CONTENT,
      data: null,
    };
  }
}

export const transactionRepo = new TransactionRepository(`transactions.json`);
