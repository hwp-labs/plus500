import path from "path";
import fs from "fs/promises";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";
import { DB_PATH } from "../config";

export class BaseRepository {
  protected readonly dir: string;

  constructor(filename: string) {
    this.dir = path.join(process.cwd(), `${DB_PATH}/${filename}`);
  }

  protected async read<T>(): Promise<T> {
    try {
      const res = await fs.readFile(this.dir, "utf-8");
      return JSON.parse(res);
    } catch(err) {
      console.log("🚀 ~ BaseRepository ~ read ~ err:", err)
      throw new DatabaseError("Failed to read database");
    }
  }

  protected async write<T>(data: T): Promise<void> {
    try {
      await fs.writeFile(this.dir, JSON.stringify(data, null, 2));
    } catch(err) {
      console.log("🚀 ~ BaseRepository ~ write ~ err:", err)
      throw new DatabaseError("Failed to write database");
    }
  }
}

class DatabaseError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
    this.status = HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
  }
}
