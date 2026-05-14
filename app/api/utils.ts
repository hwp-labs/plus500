import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export const routeUtil = {
  missingQueryParam: () =>
    Response.json(
      { success: false, message: "Missing query parameter" },
      { status: HTTP_STATUS_CODE.UNPROCESSABLE },
    ),
};
