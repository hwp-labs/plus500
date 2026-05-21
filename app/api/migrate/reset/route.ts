import { type NextRequest } from "next/server";
import { sql } from "@/lib/neon/config";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export async function GET(req: NextRequest) {
  const apiKey = req.nextUrl.searchParams.get("apiKey");

  if (apiKey !== process.env.API_KEY) {
    return Response.json(
      { error: "Invalid API Key!" },
      { status: HTTP_STATUS_CODE.UNAUTHORIZED },
    );
  }

  const [admins, users, transactions] = await Promise.all([
    seedAdminsAsync(),
    seedUsersAsync(),
    seedTransactionsAsync(),
  ]);

  return Response.json(
    {
      data: {
        admins,
        users,
        transactions,
      },
    },
    { status: HTTP_STATUS_CODE.CREATED },
  );
}

const seedAdminsAsync = async () => {
  const x = {
    email: "admin@plus500.com",
    password:
      "7359c4c58f19ffa7f46f166ef96027cc801426a946e02b7c0623bcadad022163",
    btc: "bc1qjzn57cqgdf7nvq755xemnf6sqx7mhuyuuv55j8",
    eth: "0x5FfDDc9A5a18Fb3fD7F876BF01e02e6D00225999",
    usdt: "0x5FfDDc9A5a18Fb3fD7F876BF01e02e6D00225999",
    usdc: "0x5FfDDc9A5a18Fb3fD7F876BF01e02e6D00225999",
  };

  await sql`TRUNCATE TABLE admins`;

  return await sql`INSERT INTO admins (email, password, btc, eth, usdt, usdc) 
    VALUES (${x.email}, ${x.password}, ${x.btc}, ${x.eth}, ${x.usdt}, ${x.usdc})
    RETURNING *`;
};

const seedUsersAsync = async () => {
  const data = [
    {
      email: "john@plus500.com",
      password:
        "4dcafe40658a41a5bc3cc964d79b3967a76f8d4847adcdae7965f5b7be3fcc5c",
    },
    {
      email: "jane@plus500.com",
      password:
        "4dcafe40658a41a5bc3cc964d79b3967a76f8d4847adcdae7965f5b7be3fcc5c",
    },
  ];

  await sql`TRUNCATE TABLE users`;

  return await Promise.all(
    data.map(
      (x) => sql`INSERT INTO users (email, password) 
    VALUES (${x.email}, ${x.password})
    RETURNING *`,
    ),
  );
};

const seedTransactionsAsync = async () => {
  const data = [
    {
      email: "john@plus500.com",
      type: 1,
      amount: 1000,
      receipt: "/uploads/seed-receipt.png",
    },
    {
      email: "jane@plus500.com",
      type: 0,
      amount: 2000,
      receipt: null,
    },
  ];

  await sql`TRUNCATE TABLE transactions`;

  return await Promise.all(
    data.map(
      (x) => sql`INSERT INTO transactions (email, type, amount, receipt) 
    VALUES (${x.email}, ${x.type}, ${x.amount}, ${x.receipt})
    RETURNING *`,
    ),
  );
};
