"use client";
import React, { useState } from "react";
import { DataTable } from "../../components/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../components/table/DataTableHeader";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Badge } from "../../components/ui/badge";
import FormPengeluaran from "./FormPengeluaran";

type Props = {};

const TablePengeluaran = (props: Props) => {
  type Pengeluaran = {
    id: number;
    keterangan: string;
    jumlah: number;
    status: string;
  };

  const pengeluaran: Pengeluaran[] = [
    {
      id: 1,
      keterangan: "Pembelian Bahan Baku A",
      jumlah: 2500,
      status: "selesai",
    },
    {
      id: 2,
      keterangan: "Gaji Karyawan Bulan Lalu",
      jumlah: 8500,
      status: "selesai",
    },
    {
      id: 3,
      keterangan: "Pembayaran Faktur Supplier",
      jumlah: 4200,
      status: "proses",
    },
    {
      id: 4,
      keterangan: "Pembelian Bahan Baku B",
      jumlah: 3200,
      status: "selesai",
    },
    {
      id: 5,
      keterangan: "Gaji Karyawan Bulan Ini",
      jumlah: 9000,
      status: "proses",
    },
    {
      id: 6,
      keterangan: "Pembayaran Sewa Kantor",
      jumlah: 6000,
      status: "proses",
    },
    {
      id: 7,
      keterangan: "Pembelian Perlengkapan Kantor",
      jumlah: 1800,
      status: "selesai",
    },
    {
      id: 8,
      keterangan: "Gaji Karyawan Bulan Depan",
      jumlah: 9200,
      status: "tunda",
    },
    {
      id: 9,
      keterangan: "Pembayaran Tagihan Listrik",
      jumlah: 3500,
      status: "proses",
    },
    {
      id: 10,
      keterangan: "Pembelian Bahan Baku C",
      jumlah: 2800,
      status: "selesai",
    },
    {
      id: 11,
      keterangan: "Pengeluaran Lainnya",
      jumlah: 1200,
      status: "selesai",
    },
    {
      id: 12,
      keterangan: "Gaji Karyawan Bulan Depan",
      jumlah: 9500,
      status: "proses",
    },
    {
      id: 13,
      keterangan: "Pembelian Bahan Baku D",
      jumlah: 2100,
      status: "tunda",
    },
    {
      id: 14,
      keterangan: "Pengeluaran Urgent",
      jumlah: 2800,
      status: "proses",
    },
    {
      id: 15,
      keterangan: "Pembelian Bahan Baku E",
      jumlah: 3100,
      status: "selesai",
    },
  ];

  const columns: ColumnDef<Pengeluaran>[] = [
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
  ];
  const [data, setData] = useState(pengeluaran);
  return <DataTable columns={columns} data={data} form={<FormPengeluaran/>} title="Tabel Data Pengeluaran Keuangan" />;
};

export default TablePengeluaran;
