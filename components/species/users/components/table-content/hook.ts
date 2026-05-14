import { useEffect, useState } from "react";
import { IUser, UpdateUserDto } from "@/lib/fsdb/config";
import data from "@/lib/fsdb/data/users.json";

export function useTableContent() {
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState<UpdateUserDto>({});

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ formData:", formData);
  }, [formData]);

  const handleEdit = (item: IUser) => {
    if (selected === item.email) {
      setSelected("");
      setFormData({});
    } else {
      const { email, password, ...rest } = item;
      setSelected(item.email);
      setFormData(rest);
    }
  };

  const handleChange = (payload: UpdateUserDto) => {
    setFormData((s) => ({ ...s, ...payload }));
  };

  const handleSave = async () => {
    console.log("🚀 ~ handleSave ~ formData:", formData);
  };

  return { data, selected, formData, handleEdit, handleChange, handleSave };
}
