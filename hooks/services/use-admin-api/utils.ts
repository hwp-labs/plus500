import { AdminEntity, UpdateAdminDto } from "@/app/api/admins/types";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export type DataDto = typeof defaultData;

export const defaultData = {
  btc: {
    src: "/images/coin-btc.png",
    label: "BTC",
    value: "0x",
  },
  eth: {
    src: "/images/coin-eth.png",
    label: "ETH",
    value: "0x",
  },
  usdt: {
    src: "/images/coin-usdt.png",
    label: "USDT",
    value: "0x",
  },
  usdc: {
    src: "/images/coin-usdc.png",
    label: "USDC",
    value: "0x",
  },
};

export const defaultForm = {
    // btc: null,
    // eth: null,
    // usdt: null,
    // usdc: null,
  }

export const getAdminApi = async (prevData: DataDto) => {
  const raw = await fetch(`/api/admins`);

  if (raw.status === HTTP_STATUS_CODE.OK) {
    const res: { data: AdminEntity } = await raw.json();

    const newData = { ...prevData };
    prevData.btc.value = res.data?.btc || "";
    prevData.eth.value = res.data?.eth || "";
    prevData.usdt.value = res.data?.usdt || "";
    prevData.usdc.value = res.data?.usdc || "";

    return newData;
  }
};

export const updateAdminApi = async (form: UpdateAdminDto) => {
  const raw = await fetch(`/api/admins`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  return raw.status === HTTP_STATUS_CODE.OK;
};
