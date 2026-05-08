import { useState } from "react";
import { bytesToMb, Data, fileToBase64, fileToBlob, mbToBytes } from "./utils";

interface Args {
  fileSizeMbLimit?: number;
}

export function useFileInput(args?: Args) {
  const { fileSizeMbLimit = 5 } = args ?? {};

  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = async (
    ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setData(null);
    setError(null);

    const file = ev.currentTarget.files?.[0];

    if (!file) return;

    if (file.size > mbToBytes(fileSizeMbLimit)) {
      ev.target.value = ""; // reset input
      setError(`File size must be less than ${fileSizeMbLimit}MB!`);
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const base64 = await fileToBase64(file);
    setData({
      file,
      fileSizeMb: bytesToMb(file.size),
      base64,
      blob: fileToBlob(file),
    });
    setLoading(false);
  };

  return { data, error, loading, handleChange };
}
