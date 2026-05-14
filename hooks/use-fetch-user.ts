import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth-store";
import { IUser } from "@/lib/fsdb/config";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

const defaultData = {
  available: 0,
  equity: 0,
  i_margin: 0,
  m_margin: 0,
  profit_loss: 0,
};

export function useFetchUser() {
  const session = useAuthStore((s) => s.session);

  const [data, setData] = useState<typeof defaultData>(defaultData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetcher();
  }, []);

  const fetcher = async () => {
    setLoading(true);
    const raw = await fetch(`/api/users/?q=${session?.email}`);

    if (raw.status === HTTP_STATUS_CODE.OK) {
      const res: { data: IUser } = await raw.json();
      setData({
        available: res.data?.available || 0,
        equity: res.data?.equity || 0,
        i_margin: res.data?.i_margin || 0,
        m_margin: res.data?.m_margin || 0,
        profit_loss: res.data?.profit_loss || 0,
      });
    }

    setLoading(false);
  };

  return { data, loading };
}
