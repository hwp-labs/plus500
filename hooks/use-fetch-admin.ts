import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth-store";
import { IAdmin } from "@/lib/fsdb/config";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

const defaultData = {
  btc: {
    src: "/images/coin-btc.png",
    label: "BTC",
    value: "",
  },
  eth: {
    src: "/images/coin-eth.png",
    label: "ETH",
    value: "",
  },
  usdt: {
    src: "/images/coin-usdt.png",
    label: "USDT",
    value: "",
  },
  usdc: {
    src: "/images/coin-usdc.png",
    label: "USDC",
    value: "",
  },
};

export function useFetchAdmin() {
  const session = useAuthStore((s) => s.session);

  const [data, setData] = useState<typeof defaultData>(defaultData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async () => {
    setLoading(true);
    const raw = await fetch(`/api/admin`);

    if (raw.status === HTTP_STATUS_CODE.OK) {
      const res: { data: IAdmin } = await raw.json();

      const prevData = { ...data };
      prevData.btc.value = res.data?.btc || "";
      prevData.eth.value = res.data?.eth || "";
      prevData.usdt.value = res.data?.usdt || "";
      prevData.usdc.value = res.data?.usdc || "";

      setData(prevData);
    }

    setLoading(false);
  };

  return { data, loading };
}
