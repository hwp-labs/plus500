import { useState } from "react";
import { useAuthStore } from "@/store/auth-store";
import { UpdateUserDto, UserEntity } from "@/lib/fsdb/config";
import { sleep } from "@/utils";
//
import {
  defaultUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./utils";

export function useUsersApi() {
  const session = useAuthStore((s) => s.session);

  const [refetchKey, setRefetchKey] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<UserEntity[]>([]);
  const [user, setUser] = useState<UpdateUserDto>(defaultUser);
  const [form, setForm] = useState<UpdateUserDto>({});
  const [selected, setSelected] = useState("");

  const handleChange = (form: UpdateUserDto) => {
    setForm((s) => ({ ...s, ...form }));
  };

  const handleEdit = (item: UserEntity) => {
    if (selected === item.email) {
      setForm({});
      setSelected("");
    } else {
      const { available, equity, i_margin, m_margin, profit_loss } = item;
      setForm({ available, equity, i_margin, m_margin, profit_loss });
      setSelected(item.email);
    }
  };

  const fetchUsers = async () => {
    setFetching(true);

    const newData = await getUsers();
    if (newData) setUsers(newData);

    setFetching(false);
  };

  const fetchUser = async (email?: string) => {
    const q = email || session!.email;

    setFetching(true);

    const newData = await getUser(q);
    if (newData) setUser(newData);

    setFetching(false);
  };

  const handleUpdate = async (email: string) => {
    setError(null);
    setLoading(true);

    const ok = await updateUser(form, email);
    if (ok) {
      setSuccess(true);
      await sleep(2);
      setSuccess(false);
      setRefetchKey((s) => !s);
    } else {
      setError("Update failed, please try again!");
    }

    setLoading(false);
  };

  const handleDelete = async (email: string) => {
    if (confirm("Delete User?")) {
      setLoading(true);

      await deleteUser(email);
      setRefetchKey((s) => !s);

      setLoading(false);
    }
  };

  return {
    refetchKey,
    fetching,
    loading,
    success,
    error,
    users,
    user,
    form,
    setForm,
    selected,
    handleChange,
    handleEdit,
    fetchUsers,
    fetchUser,
    handleUpdate,
    handleDelete,
  };
}
