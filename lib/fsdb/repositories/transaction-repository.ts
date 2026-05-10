import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";
import {
  ApiResponseAsync,
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

    return { status: HTTP_STATUS_CODE.OK, data };
  }

  async create(req: CreateTransactionDto): ApiResponseAsync<ITransaction> {
    const res = await this.read<ITransaction[]>();

    const data = MUTATION.parse({ req }) as ITransaction;
    res.push(data);

    await this.write(res);
    return { status: HTTP_STATUS_CODE.CREATED, data };
  }

  async updateStatus(
    id: ITransaction["id"],
    req: UpdateTransactionDto,
  ): ApiResponseAsync<ITransaction> {
    const res = await this.read<ITransaction[]>();
    const i = res.findIndex((row) => row.id === id);

    if (i === -1) return { status: HTTP_STATUS_CODE.NOT_FOUND };

    const req_ = MUTATION.parse({ req, method: "put" });
    const data = (res[i] = {
      ...res[i],
      ...req_,
    });

    await this.write(res);
    return { status: HTTP_STATUS_CODE.OK, data };
  }

  async delete(id: ITransaction["id"]): ApiResponseAsync {
    const res = await this.read<ITransaction[]>();

    if (!res.some((row) => row.id === id))
      return { status: HTTP_STATUS_CODE.NOT_FOUND };

    const data = res.filter((row) => row.id !== id);

    await this.write(data);
    return { status: HTTP_STATUS_CODE.NO_CONTENT };
  }
}

export const transactionRepository = new TransactionRepository(
  `transactions.json`,
);
