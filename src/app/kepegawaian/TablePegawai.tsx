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
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { useToast } from "../../components/ui/use-toast";

type Props = {};

const TablePegawai = (props: Props) => {
    const employees = [
      {
        id: 1,
        nama: "John Doe",
        email: "JohnDoe@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Manajer Proyek",
        departemen: "Teknologi",
        gaji: 80000,
        status: "Aktif",
      },
      {
        id: 2,
        nama: "Jane Smith",
        email: "JaneSmith@gmail.com",
        avatar: "/patrick1.jpg",
        jabatan: "Analis Bisnis",
        departemen: "Keuangan",
        gaji: 60000,
        status: "Aktif",
      },
      {
        id: 3,
        nama: "Michael Johnson",
        email: "MichaelJohnson@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Pengembang Perangkat Lunak",
        departemen: "Teknologi",
        gaji: 75000,
        status: "Aktif",
      },
      {
        id: 4,
        nama: "Emily Wilson",
        email: "EmilyWilson@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Manajer Keuangan",
        departemen: "Keuangan",
        gaji: 85000,
        status: "Aktif",
      },
      {
        id: 5,
        nama: "David Lee",
        email: "DavidLee@gmail.com",
        avatar: "/patrick1.jpg",
        jabatan: "Pengembang Web",
        departemen: "Teknologi",
        gaji: 70000,
        status: "Aktif",
      },
      {
        id: 6,
        nama: "Lisa Davis",
        email: "LisaDavis@gmail.com",
        avatar: "/patrick2.jpg",
        jabatan: "HR Manager",
        departemen: "SDM",
        gaji: 70000,
        status: "Aktif",
      },
      {
        id: 7,
        nama: "Richard Brown",
        email: "RichardBrown@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Pengembang Perangkat Lunak",
        departemen: "Teknologi",
        gaji: 75000,
        status: "Aktif",
      },
      {
        id: 8,
        nama: "Mary Martinez",
        email: "MaryMartinez@gmail.com",
        avatar: "/patrick1.jpg",
        jabatan: "Analis Keuangan",
        departemen: "Keuangan",
        gaji: 60000,
        status: "Aktif",
      },
      {
        id: 9,
        nama: "William Harris",
        email: "WilliamHarris@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Pengembang Mobile",
        departemen: "Teknologi",
        gaji: 72000,
        status: "Aktif",
      },
      {
        id: 10,
        nama: "Patricia Wilson",
        email: "PatriciaWilson@gmail.com",
        avatar: "/patrick2.jpg",
        jabatan: "Manajer SDM",
        departemen: "SDM",
        gaji: 78000,
        status: "Aktif",
      },
      {
        id: 11,
        nama: "Thomas Anderson",
        email: "ThomasAnderson@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Pengembang Web",
        departemen: "Teknologi",
        gaji: 70000,
        status: "Aktif",
      },
      {
        id: 12,
        nama: "Jessica Taylor",
        email: "JessicaTaylor@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Manajer Proyek",
        departemen: "Teknologi",
        gaji: 80000,
        status: "Aktif",
      },
      {
        id: 13,
        nama: "Daniel Clark",
        email: "DanielClark@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Analis Keuangan",
        departemen: "Keuangan",
        gaji: 60000,
        status: "Aktif",
      },
      {
        id: 14,
        nama: "Nancy Scott",
        email: "NancyScott@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Pengembang Mobile",
        departemen: "Teknologi",
        gaji: 72000,
        status: "Aktif",
      },
      {
        id: 15,
        nama: "Kevin Walker",
        email: "KevinWalker@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Manajer SDM",
        departemen: "SDM",
        gaji: 78000,
        status: "Aktif",
      },
      {
        id: 16,
        nama: "Sandra White",
        email: "SandraWhite@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Pengembang Web",
        departemen: "Teknologi",
        gaji: 70000,
        status: "Aktif",
      },
      {
        id: 17,
        nama: "Frank Green",
        email: "FrankGreen@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Manajer Keuangan",
        departemen: "Keuangan",
        gaji: 85000,
        status: "Aktif",
      },
      {
        id: 18,
        nama: "Carol Adams",
        email: "CarolAdams@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Analis Bisnis",
        departemen: "Keuangan",
        gaji: 60000,
        status: "Aktif",
      },
      {
        id: 19,
        nama: "Joseph Martinez",
        email: "JosephMartinez@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "Pengembang Perangkat Lunak",
        departemen: "Teknologi",
        gaji: 75000,
        status: "Aktif",
      },
      {
        id: 20,
        nama: "Linda Hall",
        email: "LindaHall@gmail.com",
        avatar: "/patrick.jpeg",
        jabatan: "HR Manager",
        departemen: "SDM",
        gaji: 70000,
        status: "Aktif",
      },
    ];
    const { toast } = useToast()
    const [data, setData] = useState(employees)
    const deleteData = (employee:any) => {
        toast({
            variant: "successs",
            title: "Succes",
            description: (
                "Data berhasil dihapus"
                ),
            });
        setData(data.filter((item: any)=> item.id !== employee.id))
    }

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "nama",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Nama" />;
      },
      cell({ row }) {
        const data = row.original;
        return (
          <div className="flex items-center gap-2">
            <Image
              alt="avatar"
              src={data.avatar}
              width={20}
              height={20}
              unoptimized
              className="rounded-full object-cover h-10 w-10 aspect-square"
            />

            <div className="flex flex-col">
              <span className="font-semibold">{data.nama}</span>
              <span className="text-xs text-muted-foreground">
                {data.email}
              </span>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "jabatan",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Jabatan" />;
      },
    },
    {
      accessorKey: "departemen",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Departemen" />;
      },
    },
    {
      accessorKey: "gaji",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Gaji" />;
      },
      cell({ row }) {
        const data = row.original;
        return (
          <div
            className={cn(
              "font-semibold flex items-center gap-2 ",
            )}
          >
            {data.gaji.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </div>
        );
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
          case "inactive":
            badgeComponent = (
              <Badge variant={"destructive"}>{data.status}</Badge>
            );
            break;
          default:
            badgeComponent = <Badge>{data.status}</Badge>;
            break;
        }
        return <div className="">{badgeComponent}</div>;
      },
    },
    {
        // id: "actions",/
        header: "Action",
        cell: ({ row }) => {
          const employee = row.original;
  
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
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(employee.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View Detail</DropdownMenuItem>
                <DropdownMenuItem onClick={()=> deleteData(employee)}>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default TablePegawai;
