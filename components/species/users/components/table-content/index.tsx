"use client";

import { Fragment } from "react";
import { TableBuilder } from "@/components/species/dashboard/components/table-builder";
import { TableAction } from "@/components/species/dashboard/components/table-builder/action";
import { InlineEditForm } from "../inline-edit-form";
import { UserEntity, UpdateUserDto } from "@/lib/fsdb/config";
//
import { useTableContent } from "./hook";

export const TableContent = () => {
  const { data, selected, formData, handleEdit, handleChange, handleSave } =
    useTableContent();
  //
  return (
    <TableBuilder.TBody>
      {(data as UserEntity[]).map((item, i) => (
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
                {selected === item.email ? (
                  <InlineEditForm
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={(v) => handleChange({ [input.name]: v })}
                    onSave={handleSave}
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
          <TableAction hasEdit onEdit={() => handleEdit(item)} hasDelete />
        </TableBuilder.Tr>
      ))}
    </TableBuilder.TBody>
  );
};
