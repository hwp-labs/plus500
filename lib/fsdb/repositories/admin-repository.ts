import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";
import { ApiResponseAsync, IAdmin, UpdateAdminDto } from "../config";
import { MUTATION } from "../utils";
import { BaseRepository } from "./base-repository";

class AdminRepository extends BaseRepository {
  constructor(readonly filename: string) {
    super(filename);
  }

  async getFirst(): ApiResponseAsync<IAdmin> {
    const data = await this.read<IAdmin>();

    return { status: HTTP_STATUS_CODE.OK, data };
  }

  async updateWallet(req: UpdateAdminDto): ApiResponseAsync<IAdmin> {
    const res = await this.read<IAdmin>();
    const req_ = MUTATION.parse({ req, method: "put" });
    const data = { ...res, ...req_ };

    await this.write(data);
    return { status: HTTP_STATUS_CODE.OK, data };
  }
}

export const adminRepository = new AdminRepository(`admin.json`);
