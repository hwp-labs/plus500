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
  missingFieldValue: Response.json(
    { success: false, message: "Missing field value" },
    { status: HTTP_STATUS_CODE.UNPROCESSABLE },
  ),
  notFound: Response.json(
    { success: false, message: "Record not found" },
    { status: HTTP_STATUS_CODE.NOT_FOUND },
  ),
  noContent: new Response(null, { status: HTTP_STATUS_CODE.NO_CONTENT }),
};
