"use client";

import { Fragment, useEffect, useState } from "react";
import { TableBuilder } from "../..//dashboard/components/table-builder";
import { TableAction } from "../../dashboard/components/table-builder/action";
import { InlineEditForm } from "./inline-edit-form";
//
import { IUser, UpdateUserDto } from "@/lib/fsdb/config";
import data from "@/lib/fsdb/data/users.json";

export const TableContent = () => {
  const [editIndex, setEditIndex] = useState(-1);
  const [formData, setFormData] = useState<UpdateUserDto>({});

  const toggleEdit = (i: number) => {
    if (editIndex === i) {
      setFormData({});
      setEditIndex(-1);
    } else {
      const { email, password, ...rest } = data[i];
      setFormData(rest);
      setEditIndex(i);
    }
  };

  const handleChange = (payload: UpdateUserDto) => {
    console.log("🚀 ~ handleChange ~ payload:", payload)
    setFormData((s) => ({ ...s, ...payload }));
    
  };

  const handleSave = async () => {
    console.log(formData);
  };

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ formData:", formData)
  }, [formData]);
  //
  return (
    <TableBuilder.TBody>
      {(data as IUser[]).map((item, i) => (
        <TableBuilder.Tr key={i}>
          <td>{item.email}</td>
          {[
            {
              name: "available",
              placeholder: "Avail. Bal.",
              value: formData.available,
            },
            {
              name: "equity",
              placeholder: "Equity",
              value: formData.equity,
            },
            {
              name: "i_margin",
              placeholder: "Ini. Margin",
              value: formData.i_margin,
            },
            {
              name: "m_margin",
              placeholder: "Mtn. Margin",
              value: formData.m_margin,
            },
            {
              name: "profit_loss",
              placeholder: "Profit/Loss",
              value: formData.profit_loss,
            },
          ].map((input, j) => {
            return (
              <Fragment key={j}>
                {editIndex === i ? (
                  <InlineEditForm
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={(v) => handleChange({ [input.name]: v })}
                    onSave={handleSave}
                  />
                ) : (
                  <TableBuilder.Amount
                    value={item[input.name as keyof IUser]}
                    currency="usd"
                  />
                )}
              </Fragment>
            );
          })}
          <TableBuilder.DateTime dt={item.updated_at} />
          <TableAction hasEdit onEdit={() => toggleEdit(i)} hasDelete />
        </TableBuilder.Tr>
      ))}
    </TableBuilder.TBody>
  );
};
