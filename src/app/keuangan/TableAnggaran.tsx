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

const TableAnggaran = (props: Props) => {
  type Anggaran = {
    id: number;
    nomor: string;
    item: string;
    tanggal_perencanaan: string;
    anggaran: number;
    status: string;
    jenis_anggaran: string;
  };

  const anggaran: Anggaran[] = [
    {
      id: 1,
      nomor: "ABC123",
      item: "Pengadaan Barang",
      tanggal_perencanaan: "2023-10-15",
      anggaran: 5000,
      status: "Dalam Proses",
      jenis_anggaran: "Operasional",
    },
    {
      id: 2,
      nomor: "DEF456",
      item: "Proyek Konstruksi",
      tanggal_perencanaan: "2023-11-05",
      anggaran: 12000,
      status: "Selesai",
      jenis_anggaran: "Investasi",
    },
    {
      id: 3,
      nomor: "GHI789",
      item: "Penggajian Karyawan",
      tanggal_perencanaan: "2023-10-25",
      anggaran: 8000,
      status: "Dalam Proses",
      jenis_anggaran: "Operasional",
    },
    {
      id: 4,
      nomor: "JKL012",
      item: "Pemeliharaan Mesin",
      tanggal_perencanaan: "2023-11-10",
      anggaran: 3000,
      status: "Dalam Proses",
      jenis_anggaran: "Operasional",
    },
    {
      id: 5,
      nomor: "MNO345",
      item: "Pelatihan Karyawan",
      tanggal_perencanaan: "2023-10-20",
      anggaran: 7000,
      status: "Selesai",
      jenis_anggaran: "Pengembangan",
    },
    {
      id: 6,
      nomor: "PQR678",
      item: "Pengadaan Perangkat IT",
      tanggal_perencanaan: "2023-11-15",
      anggaran: 10000,
      status: "Dalam Proses",
      jenis_anggaran: "Operasional",
    },
    {
      id: 7,
      nomor: "STU901",
      item: "Pemeliharaan Gedung",
      tanggal_perencanaan: "2023-11-01",
      anggaran: 6000,
      status: "Selesai",
      jenis_anggaran: "Operasional",
    },
    {
      id: 8,
      nomor: "VWX234",
      item: "Pengadaan Bahan Baku",
      tanggal_perencanaan: "2023-10-30",
      anggaran: 8500,
      status: "Dalam Proses",
      jenis_anggaran: "Operasional",
    },
    {
      id: 9,
      nomor: "YZA567",
      item: "Proyek Riset",
      tanggal_perencanaan: "2023-11-20",
      anggaran: 14000,
      status: "Dalam Proses",
      jenis_anggaran: "Investasi",
    },
    {
      id: 10,
      nomor: "BCD890",
      item: "Pengadaan Perlengkapan Kantor",
      tanggal_perencanaan: "2023-10-28",
      anggaran: 4500,
      status: "Selesai",
      jenis_anggaran: "Operasional",
    },
    {
      id: 11,
      nomor: "EFG123",
      item: "Pelatihan Online",
      tanggal_perencanaan: "2023-11-12",
      anggaran: 5500,
      status: "Dalam Proses",
      jenis_anggaran: "Pengembangan",
    },
    {
      id: 12,
      nomor: "HIJ456",
      item: "Pengadaan Kendaraan",
      tanggal_perencanaan: "2023-10-22",
      anggaran: 9500,
      status: "Selesai",
      jenis_anggaran: "Operasional",
    },
    {
      id: 13,
      nomor: "KLM789",
      item: "Proyek Penelitian",
      tanggal_perencanaan: "2023-11-25",
      anggaran: 11000,
      status: "Dalam Proses",
      jenis_anggaran: "Investasi",
    },
    {
      id: 14,
      nomor: "NOP012",
      item: "Pengadaan Perlengkapan Laboratorium",
      tanggal_perencanaan: "2023-10-18",
      anggaran: 6000,
      status: "Selesai",
      jenis_anggaran: "Operasional",
    },
    {
      id: 15,
      nomor: "QRS345",
      item: "Pelatihan Keterampilan",
      tanggal_perencanaan: "2023-11-08",
      anggaran: 7500,
      status: "Dalam Proses",
      jenis_anggaran: "Pengembangan",
    },
  ];

  const columns: ColumnDef<Anggaran>[] = [
    {
      accessorKey: "nomor",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Nomor" />;
      },
    },
    {
      accessorKey: "item",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Item" />;
      },
    },
    {
      accessorKey: "tanggal_perencanaan",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Tanggal Perencanaan" />;
      },
    },
    {
      accessorKey: "anggaran",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Anggaran" />;
      },
      cell({ row }) {
        const data = row.original;
        return <div className="text-right">{data.anggaran.toLocaleString(
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
          case "Dalam Proses":
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
        return <div className="flex items-center justify-center">{badgeComponent}</div>;
      },
    },
    {
      accessorKey: "jenis_anggaran",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Jenis Anggaran" />;
      },
    },
  ];
  const [data, setData] = useState(anggaran);
  return (
    <DataTable
      columns={columns}
      data={data}
      form={<FormAnggaran />}
      title="Tabel Data Anggaran Keuangan"
    />
  );
};

export default TableAnggaran;
