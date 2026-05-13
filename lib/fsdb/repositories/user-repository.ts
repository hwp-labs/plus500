import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";
import {
  ApiResponseAsync,
  CreateUserDto,
  IUser,
  UpdateUserDto,
} from "../config";
import { MUTATION } from "../utils";
import { BaseRepository } from "./base-repository";

class UserRepository extends BaseRepository {
  constructor(readonly filename: string) {
    super(filename);
  }

  async getAll(): ApiResponseAsync<IUser[]> {
    const data = await this.read<IUser[]>();

    return { status: HTTP_STATUS_CODE.OK, data };
  }

  async getByEmail(email: IUser["email"]): ApiResponseAsync<IUser> {
    const res = await this.read<IUser[]>();
    const data = res.find((row) => row.email === email);

    return data
      ? { status: HTTP_STATUS_CODE.OK, data }
      : { status: HTTP_STATUS_CODE.NOT_FOUND };
  }

  async create(req: CreateUserDto): ApiResponseAsync<IUser> {
    const res = await this.read<IUser[]>();

    if (res.some((row) => row.email === req.email))
      return { status: HTTP_STATUS_CODE.CONFLICT };

    const data = MUTATION.parse({ req }) as IUser;
    res.push(data);

    await this.write(res);
    return { status: HTTP_STATUS_CODE.CREATED, data };
  }

  async updateWallet(
    id: IUser["id"],
    req: UpdateUserDto,
  ): ApiResponseAsync<IUser> {
    const res = await this.read<IUser[]>();
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

  async deleteByEmail(email: IUser["email"]): ApiResponseAsync {
    const res = await this.read<IUser[]>();

    if (!res.some((row) => row.email === email))
      return { status: HTTP_STATUS_CODE.NOT_FOUND };

    const data = res.filter((row) => row.email !== email);

    await this.write(data);
    return { status: HTTP_STATUS_CODE.NO_CONTENT };
  }
}

export const userRepository = new UserRepository(`users.json`);
