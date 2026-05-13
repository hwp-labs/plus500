import {
  HTTP_STATUS_CODE,
  HTTP_STATUS_TEXT,
} from "@/constants/HTTP_STATUS_CODE";
import { IApiResponse, CreateUserDto, IUser, UpdateUserDto } from "../config";
import { MUTATION } from "../utils";
import { BaseRepository } from "./base-repository";

class UserRepository extends BaseRepository {
  constructor(readonly filename: string) {
    super(filename);
  }

  async getAll(): IApiResponse<IUser[]> {
    const data = await this.read<IUser[]>();

    return {
      success: true,
      status: HTTP_STATUS_CODE.OK,
      data,
    };
  }

  async getByEmail(email: IUser["email"]): IApiResponse<IUser> {
    const res = await this.read<IUser[]>();
    const data = res.find((row) => row.email === email);

    return data
      ? {
          success: true,
          status: HTTP_STATUS_CODE.OK,
          data,
        }
      : {
          success: false,
          status: HTTP_STATUS_CODE.NOT_FOUND,
          message: HTTP_STATUS_TEXT.NOT_FOUND,
        };
  }

  async create(req: CreateUserDto): IApiResponse<IUser> {
    const res = await this.read<IUser[]>();

    if (res.some((row) => row.email === req.email)) {
      return {
        success: false,
        status: HTTP_STATUS_CODE.CONFLICT,
        message: HTTP_STATUS_TEXT.CONFLICT,
      };
    }

    const data = MUTATION.parse({ req }) as IUser;
    res.push(data);

    await this.write(res);
    return {
      success: true,
      status: HTTP_STATUS_CODE.CREATED,
      data,
    };
  }

  async updateWallet(id: IUser["id"], req: UpdateUserDto): IApiResponse<IUser> {
    const res = await this.read<IUser[]>();
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

  async deleteByEmail(email: IUser["email"]): IApiResponse<null> {
    const res = await this.read<IUser[]>();

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

export const userRepository = new UserRepository(`users.json`);
