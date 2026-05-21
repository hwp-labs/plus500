"use client";

import { Fragment, useEffect } from "react";
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { TableAction } from "@/components/species/dashboard/components/table-builder/action";
import { TableEmpty } from "../../dashboard/components/table-builder/empty";
import { InlineEditForm } from "./inline-edit-form";
import { useUsersApi } from "@/hooks/services/use-users-api";
import { UpdateUserDto } from "@/app/api/users/types";

export const TableContent = () => {
  const {
    refetchKey,
    fetching,
    loading,
    success,
    users,
    form,
    selected,
    handleChange,
    handleEdit,
    fetchUsers,
    handleUpdate,
    handleDelete,
  } = useUsersApi();

  useEffect(() => {
    fetchUsers();
  }, [refetchKey]);
  //
  return (
    <TableBuilder.TBody>
      <TableBuilder.TrLoading show={fetching} />
      {users.length ? (
        users.map((item, i) => (
          <TableBuilder.Tr key={i}>
            <td>{item.email}</td>
            {[
              {
                name: "available",
                placeholder: "Avail. Bal.",
                value: form.available,
              },
              {
                name: "equity",
                placeholder: "Equity",
                value: form.equity,
              },
              {
                name: "i_margin",
                placeholder: "Ini. Margin",
                value: form.i_margin,
              },
              {
                name: "m_margin",
                placeholder: "Mtn. Margin",
                value: form.m_margin,
              },
              {
                name: "profit_loss",
                placeholder: "Profit/Loss",
                value: form.profit_loss,
              },
            ].map((input, j) => {
              return (
                <Fragment key={j}>
                  {selected === item.email ? (
                    <InlineEditForm
                      placeholder={input.placeholder}
                      value={input.value}
                      onChange={(v) => handleChange({ [input.name]: v })}
                      onSave={() => handleUpdate(item.email)}
                      loading={loading}
                      success={success}
                    />
                  ) : (
                    <TableBuilder.Amount
                      value={item[input.name as keyof UpdateUserDto]}
                      currency="usd"
                    />
                  )}
                </Fragment>
              );
            })}
            <TableBuilder.DateTime dt={item.updated_at} />
            <TableAction
              loading={loading}
              hasEdit
              onEdit={() => handleEdit(item)}
              hasDelete
              onDelete={() => handleDelete(item.email)}
            />
          </TableBuilder.Tr>
        ))
      ) : (
        <TableEmpty label="No user records" />
      )}
    </TableBuilder.TBody>
  );
};
