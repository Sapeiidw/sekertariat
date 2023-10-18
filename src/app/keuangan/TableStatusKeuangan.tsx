"use client";
import React, { useState } from "react";
import { DataTable } from "../../components/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../components/table/DataTableHeader";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Badge } from "../../components/ui/badge";
import FormPengeluaran from "./FormPengeluaran";
import FormAnggaran from "./FormAnggaran";

type Props = {};

const TableStatusKeuangan = (props: Props) => {
  type StatausKeuangan = {
    id: number;
    uang_kas: number;
    jenis_keuangan: string;
    status: string;
  };

  const statusKeuangan: StatausKeuangan[] = [
    {
      id: 1,
      uang_kas: 5000,
      jenis_keuangan: "Pemasukan",
      status: "Tuntas",
    },
    {
      id: 2,
      uang_kas: 2500,
      jenis_keuangan: "Pengeluaran",
      status: "Dalam Proses",
    },
    {
      id: 3,
      uang_kas: 10000,
      jenis_keuangan: "Pemasukan",
      status: "Tuntas",
    },
    {
      id: 4,
      uang_kas: 3500,
      jenis_keuangan: "Pengeluaran",
      status: "Dalam Proses",
    },
    {
      id: 5,
      uang_kas: 8000,
      jenis_keuangan: "Pemasukan",
      status: "Tuntas",
    },
    {
      id: 6,
      uang_kas: 4500,
      jenis_keuangan: "Pengeluaran",
      status: "Dalam Proses",
    },
    {
      id: 7,
      uang_kas: 6000,
      jenis_keuangan: "Pemasukan",
      status: "Tuntas",
    },
    {
      id: 8,
      uang_kas: 3000,
      jenis_keuangan: "Pengeluaran",
      status: "Dalam Proses",
    },
    {
      id: 9,
      uang_kas: 7000,
      jenis_keuangan: "Pemasukan",
      status: "Tuntas",
    },
    {
      id: 10,
      uang_kas: 4000,
      jenis_keuangan: "Pengeluaran",
      status: "Dalam Proses",
    },
  ];

  const columns: ColumnDef<StatausKeuangan>[] = [
    {
      accessorKey: "jenis_keuangan",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Jenis Keuangan" />;
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Status" />;
      },
      cell({ row }) {
        const data = row.original;
        let badgeComponent;

        switch (data.status) {
          case "proses":
            badgeComponent = (
              <Badge className="capitalize" variant={"secondary"}>
                {data.status}
              </Badge>
            );
            break;
          default:
            badgeComponent = (
              <Badge className="capitalize">{data.status}</Badge>
            );
            break;
        }
        return <div className="">{badgeComponent}</div>;
      },
    },
    {
      accessorKey: "uang_kas",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Uang Kas" />;
      },
      cell({ row }) {
        const data = row.original;
        return (
          <div className="text-right">
            {data.uang_kas.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </div>
        );
      },
    },
  ];
  const [data, setData] = useState(statusKeuangan);
  return (
    <DataTable
      columns={columns}
      data={data}
      form={<FormAnggaran />}
      title="Tabel Data StatausKeuangan Keuangan"
    />
  );
};

export default TableStatusKeuangan;
