import crypto from "crypto";

const uuid = () => crypto.randomUUID();

const create = (password: string) =>
  crypto.createHash("sha256").update(password).digest("hex");

const compare = (password: string, hashed: string) =>
  hashed === crypto.createHash("sha256").update(password).digest("hex");

export const cryptoUtil = { uuid, create, compare };
