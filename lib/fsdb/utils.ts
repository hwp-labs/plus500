import { cryptoUtil } from "@/utils/crypto-util";
import { BaseEntity } from "@/types/api-type";

type MutationParseResponse = Partial<BaseEntity & { password: string }>;

interface MutationParseArgs {
  req: object;
  method?: "post" | "put" | "delete";
}

export const MUTATION = {
  parse({ req, method = "post" }: MutationParseArgs) {
    const res: MutationParseResponse = { ...req };
    const ts = new Date().toISOString();

    if (res.password) res.password = cryptoUtil.create(res.password);

    switch (method) {
      case "put":
        res.updated_at = ts;
        break;
      case "delete":
        res.deleted_at = ts;
        break;
      default:
        res.id = cryptoUtil.uuid();
        res.created_at = ts;
        res.updated_at = ts;
    }

    return res;
  },
};

export const QUERY = {
  parse() {},
};
