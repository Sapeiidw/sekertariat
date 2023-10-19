"use client";
import React, { useState } from "react";
import { DataTable } from "../../components/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpIcon, ArrowDownIcon, MoreHorizontal } from "lucide-react";
import { DataTableColumnHeader } from "../../components/table/DataTableHeader";
import { cn } from "../../lib/utils";
import { Badge } from "../../components/ui/badge";
import Image from "next/image";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { useToast } from "../../components/ui/use-toast";
import FormRegulasi from "./FormRegulasi";

type Props = {};

const TableRegulasi = (props: Props) => {
  type Document = {
    id: number;
    nomor_surat: string;
    keterangan: string;
    tujuan_surat: string;
    status: string;
  };
  const documents: Document[] = [
    {
      id: 1,
      nomor_surat: "SURAT001",
      keterangan: "Permohonan Cuti",
      tujuan_surat: "HRD",
      status: "proses",
    },
    {
      id: 2,
      nomor_surat: "SURAT002",
      keterangan: "Pengajuan Proyek",
      tujuan_surat: "Manajemen Proyek",
      status: "selesai",
    },
    {
      id: 3,
      nomor_surat: "SURAT003",
      keterangan: "Pengunduran Diri",
      tujuan_surat: "Atasan Langsung",
      status: "disetujui",
    },
    {
      id: 4,
      nomor_surat: "SURAT004",
      keterangan: "Permohonan Izin",
      tujuan_surat: "HRD",
      status: "proses",
    },
    {
      id: 5,
      nomor_surat: "SURAT005",
      keterangan: "Laporan Bulanan",
      tujuan_surat: "Manajemen",
      status: "proses",
    },
    {
      id: 6,
      nomor_surat: "SURAT006",
      keterangan: "Pemberitahuan Rapat",
      tujuan_surat: "Semua Karyawan",
      status: "selesai",
    },
    {
      id: 7,
      nomor_surat: "SURAT007",
      keterangan: "Pengajuan Cuti",
      tujuan_surat: "Atasan Langsung",
      status: "proses",
    },
    {
      id: 8,
      nomor_surat: "SURAT008",
      keterangan: "Pengajuan Dana Proyek",
      tujuan_surat: "Keuangan",
      status: "proses",
    },
    {
      id: 9,
      nomor_surat: "SURAT009",
      keterangan: "Pemberitahuan Pelatihan",
      tujuan_surat: "Peserta Pelatihan",
      status: "selesai",
    },
    {
      id: 10,
      nomor_surat: "SURAT010",
      keterangan: "Pengajuan Perjalanan Dinas",
      tujuan_surat: "HRD",
      status: "proses",
    },
    {
      id: 11,
      nomor_surat: "SURAT011",
      keterangan: "Surat Pernyataan",
      tujuan_surat: "Pihak Terkait",
      status: "disetujui",
    },
    {
      id: 12,
      nomor_surat: "SURAT012",
      keterangan: "Pengumuman Penting",
      tujuan_surat: "Semua Karyawan",
      status: "selesai",
    },
    {
      id: 13,
      nomor_surat: "SURAT013",
      keterangan: "Pemberitahuan Libur",
      tujuan_surat: "Semua Karyawan",
      status: "proses",
    },
    {
      id: 14,
      nomor_surat: "SURAT014",
      keterangan: "Pengajuan Cuti Tahun Baru",
      tujuan_surat: "Atasan Langsung",
      status: "proses",
    },
    {
      id: 15,
      nomor_surat: "SURAT015",
      keterangan: "Undangan Rapat",
      tujuan_surat: "Peserta Rapat",
      status: "proses",
    },
  ];

  const { toast } = useToast();
  const [data, setData] = useState(documents);
  const deleteData = (document: Document) => {
    toast({
      variant: "successs",
      title: "Succes",
      description: "Data berhasil dihapus",
    });
    setData(data.filter((item: Document) => item.id !== document.id));
  };

  const columns: ColumnDef<Document>[] = [
    {
      accessorKey: "nomor_surat",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Nomor Surat" />;
      },
    },
    {
      accessorKey: "keterangan",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Keterangan Surat" />;
      },
    },
    {
      accessorKey: "tujuan_surat",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Tujuan Surat" />;
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
              <Badge className="capitalize" variant={"secondary"}>{data.status}</Badge>
            );
            break;
          case "disetujui":
            badgeComponent = (
              <Badge className="capitalize" variant={"success"}>{data.status}</Badge>
            );
            break;
          case "ditolak":
            badgeComponent = (
              <Badge className="capitalize" variant={"destructive"}>{data.status}</Badge>
            );
            break;
          default:
            badgeComponent = <Badge className="capitalize">{data.status}</Badge>;
            break;
        }
        return <div className="">{badgeComponent}</div>;
      },
    },
    {
      // id: "actions",/
      header: "Action",
      cell: ({ row }) => {
        const data = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Detail</DropdownMenuItem>
              <DropdownMenuItem onClick={() => deleteData(data)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return <DataTable columns={columns} data={data} form={<FormRegulasi/>} title="Tabel Kumpulan Regulasi" />;
};

export default TableRegulasi;
