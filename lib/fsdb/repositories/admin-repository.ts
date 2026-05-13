import {
  HTTP_STATUS_CODE,
  HTTP_STATUS_TEXT,
} from "@/constants/HTTP_STATUS_CODE";
import { IApiResponse, IAdmin, UpdateAdminDto } from "../config";
import { MUTATION } from "../utils";
import { BaseRepository } from "./base-repository";

class AdminRepository extends BaseRepository {
  constructor(readonly filename: string) {
    super(filename);
  }

  async getFirst(): IApiResponse<IAdmin> {
    const data = await this.read<IAdmin>();

    return {
      success: true,
      status: HTTP_STATUS_CODE.OK,
      data,
    };
  }

  async updateWallet(req: UpdateAdminDto): IApiResponse<IAdmin> {
    const res = await this.read<IAdmin>();
    const req_ = MUTATION.parse({ req, method: "put" });
    const data = { ...res, ...req_ };

    await this.write(data);
    return {
      success: true,
      status: HTTP_STATUS_CODE.OK,
      data,
    };
  }
}

export const adminRepository = new AdminRepository(`admin.json`);
