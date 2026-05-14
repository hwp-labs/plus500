import { ApiResponseAsync } from "@/types/api-type";
import {
  HTTP_STATUS_CODE,
  HTTP_STATUS_TEXT,
} from "@/constants/HTTP_STATUS_CODE";
import {
  CreateTransactionDto,
  ITransaction,
  UpdateTransactionDto,
} from "../config";
import { MUTATION } from "../utils";
import { BaseRepository } from "./base-repository";

class TransactionRepository extends BaseRepository {
  constructor(readonly filename: string) {
    super(filename);
  }

  async getAll(): ApiResponseAsync<ITransaction[]> {
    const data = await this.read<ITransaction[]>();

    return {
      success: true,
      status: HTTP_STATUS_CODE.OK,
      data,
    };
  }

  async create(req: CreateTransactionDto): ApiResponseAsync<ITransaction> {
    const res = await this.read<ITransaction[]>();

    const data = MUTATION.parse({ req }) as ITransaction;
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
    email: ITransaction["email"],
  ): ApiResponseAsync<ITransaction> {
    const res = await this.read<ITransaction[]>();
    const i = res.findIndex((row) => row.email === email);

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

  async delete(email: ITransaction["email"]): ApiResponseAsync<null> {
    const res = await this.read<ITransaction[]>();

    if (!res.some((row) => row.email === email)) {
      return {
        success: false,
        status: HTTP_STATUS_CODE.NOT_FOUND,
        message: HTTP_STATUS_TEXT.NOT_FOUND,
      };
    }

    const data = res.filter((row) => row.email !== email);

    await this.write(data);
    return {
      success: true,
      status: HTTP_STATUS_CODE.NO_CONTENT,
      data: null,
    };
  }
}

export const transactionRepo = new TransactionRepository(`transactions.json`);
