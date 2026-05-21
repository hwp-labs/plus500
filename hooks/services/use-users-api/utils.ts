import { UpdateUserDto, UserEntity } from "@/app/api/users/types";
import { HTTP_STATUS_CODE } from "@/constants/HTTP_STATUS_CODE";

export const defaultUser = {
  // available: 0,
  // equity: 0,
  // i_margin: 0,
  // m_margin: 0,
  // profit_loss: 0,
};

export const getUsersApi = async () => {
  const raw = await fetch(`/api/users`);

  if (raw.status === HTTP_STATUS_CODE.OK) {
    const { data }: { data: UserEntity[] } = await raw.json();
    return data;
  }
};

export const getUserApi = async (email: string) => {
  const raw = await fetch(`/api/users?q=${email}`);

  if (raw.status === HTTP_STATUS_CODE.OK) {
    const { data }: { data: UserEntity } = await raw.json();

    return {
      available: data?.available || 0,
      equity: data?.equity || 0,
      i_margin: data?.i_margin || 0,
      m_margin: data?.m_margin || 0,
      profit_loss: data?.profit_loss || 0,
    };
  }
};

export const updateUserApi = async (form: UpdateUserDto, email: string) => {
  const raw = await fetch(`/api/users`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...form, _identity: email }),
  });

  return raw.status === HTTP_STATUS_CODE.OK;
};

export const deleteUserApi = async (email: string) => {
  const raw = await fetch(`/api/users`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _identity: email }),
  });

  return raw.status === HTTP_STATUS_CODE.OK;
};
