import fs from "fs/promises";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export class BaseRepository {
  constructor(protected readonly path: string) {}

  protected async read<T>(): Promise<T> {
    try {
      const res = await fs.readFile(this.path, "utf-8");
      return JSON.parse(res);
    } catch {
      throw new DatabaseError("Failed to read database");
    }
  }

  protected async write<T>(data: T): Promise<void> {
    try {
      await fs.writeFile(this.path, JSON.stringify(data, null, 2));
    } catch {
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
