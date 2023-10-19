"use client";
import React, { useState } from "react";
import { DataTable } from "../../components/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../components/table/DataTableHeader";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Badge } from "../../components/ui/badge";
import FormPemasukan from "./FormPemasukan";

type Props = {};

const TablePemasukan = (props: Props) => {
  type Pemasukan = {
    id: number;
    keterangan: string;
    jumlah: number;
    status: string;
  };

  const pemasukan: Pemasukan[] = [
    {
      id: 1,
      keterangan: "Penjualan Produk A",
      jumlah: 5000,
      status: "selesai",
    },
    {
      id: 2,
      keterangan: "Pembayaran Klien B",
      jumlah: 3000,
      status: "selesai",
    },
    {
      id: 3,
      keterangan: "Investasi Saham",
      jumlah: 10000,
      status: "selesai",
    },
    {
      id: 4,
      keterangan: "Penjualan Produk C",
      jumlah: 8000,
      status: "selesai",
    },
    {
      id: 5,
      keterangan: "Pembayaran Klien D",
      jumlah: 3500,
      status: "selesai",
    },
    {
      id: 6,
      keterangan: "Dividen Saham",
      jumlah: 1200,
      status: "selesai",
    },
    {
      id: 7,
      keterangan: "Penjualan Produk B",
      jumlah: 6000,
      status: "proses",
    },
    {
      id: 8,
      keterangan: "Pembayaran Klien A",
      jumlah: 4500,
      status: "proses",
    },
    {
      id: 9,
      keterangan: "Investasi Properti",
      jumlah: 15000,
      status: "proses",
    },
    {
      id: 10,
      keterangan: "Penjualan Produk D",
      jumlah: 7500,
      status: "proses",
    },
    {
      id: 11,
      keterangan: "Pembayaran Klien C",
      jumlah: 4000,
      status: "proses",
    },
    {
      id: 12,
      keterangan: "Dividen Obligasi",
      jumlah: 900,
      status: "proses",
    },
    {
      id: 13,
      keterangan: "Penjualan Produk E",
      jumlah: 9000,
      status: "selesai",
    },
    {
      id: 14,
      keterangan: "Pembayaran Klien E",
      jumlah: 6000,
      status: "selesai",
    },
    {
      id: 15,
      keterangan: "Investasi Emas",
      jumlah: 18000,
      status: "selesai",
    },
  ];

  const columns: ColumnDef<Pemasukan>[] = [
    {
      accessorKey: "keterangan",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Keterangan" />;
      },
    },
    {
      accessorKey: "jumlah",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Jumlah" />;
      },
      cell({ row }) {
        const data = row.original;
        return <div className="text-right">{data.jumlah.toLocaleString(
          "id-ID",
          {
            style: "currency",
            currency: "IDR",
          }
        )}</div>;
      }
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
              <Badge className="capitalize" variant={"secondary"}>{data.status}</Badge>
            );
            break;
          default:
            badgeComponent = <Badge className="capitalize">{data.status}</Badge>;
            break;
        }
        return <div className="">{badgeComponent}</div>;
      },
    },
  ];
  const [data, setData] = useState(pemasukan);
  return <DataTable columns={columns} data={data} form={<FormPemasukan/>} title="Tabel Data Pemasukan Keuangan" />;
};

export default TablePemasukan;
