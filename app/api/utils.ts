import { AuthRequestDto } from "@/components/species/auth/utils";
import { cryptoUtil } from "@/utils/crypto-util";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export const routeUtil = {
  emailPassMatch: (body: AuthRequestDto, data: AuthRequestDto) =>
    body.email === data.email &&
    cryptoUtil.compare(body.password, data.password),
  missingQueryParam: Response.json(
    { success: false, message: "Missing query parameter" },
    { status: HTTP_STATUS_CODE.UNPROCESSABLE },
  ),
  noContent: new Response(null, { status: 204 }),
};
