import path from "path";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";
import {
  ApiResponseAsync,
  CreateTransactionDto,
  DB_PATH,
  ITransaction,
  UpdateTransactionDto,
} from "../config";
import { MUTATION } from "../utils";
import { BaseRepository } from "./base-repository";

class TransactionRepository extends BaseRepository {
  constructor() {
    const _path = path.join(process.cwd(), `${DB_PATH}/transactions.json`);
    super(_path);
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
}

export const transactionRepository = new TransactionRepository();
