import { ApiResponseAsync } from "@/types/api-type";
import {
  HTTP_STATUS_CODE,
  HTTP_STATUS_TEXT,
} from "@/constants/HTTP_STATUS_CODE";
import { AdminEntity, UpdateAdminDto } from "../config";
import { MUTATION } from "../utils";
import { BaseRepository } from "./base-repository";

class AdminRepository extends BaseRepository {
  constructor(readonly filename: string) {
    super(filename);
  }

  async getFirst(): ApiResponseAsync<AdminEntity> {
    const data = await this.read<AdminEntity>();

    return {
      success: true,
      status: HTTP_STATUS_CODE.OK,
      data,
    };
  }

  async updateWallet(req: UpdateAdminDto): ApiResponseAsync<AdminEntity> {
    const res = await this.read<AdminEntity>();
    const data = { ...res, ...req };

    await this.write(data);
    return {
      success: true,
      status: HTTP_STATUS_CODE.OK,
      data,
    };
  }
}

export const adminRepo = new AdminRepository(`admin.json`);
