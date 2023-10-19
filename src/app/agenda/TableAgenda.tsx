"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "../../components/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../components/table/DataTableHeader";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Badge } from "../../components/ui/badge";
import FormAgenda from "./FormAgenda";

type Props = {
  form?: boolean;
};

const TableAgenda = (props: Props) => {
  const [client, setClient] = useState(false)
  useEffect(() => {
    setClient(true)
    return () => {
      setClient(false)
    }
  }, [])
  
  type Agenda = {
    id: number;
    start: string; // You can use a more specific date format if needed
    end: string; // You can use a more specific date format if needed
    status: "to do" | "progress" | "done";
    description: string;
    title: string;
    participants: string[];
    date: string; // You can use a more specific date format if needed
  };

  const agenda: Agenda[] = [
    {
      id: 1,
      start: "2023-10-15T08:00:00",
      end: "2023-10-15T10:00:00",
      status: "to do",
      description: "Pertemuan Pemasaran",
      title: "Meeting 1",
      participants: ["Alice", "Bob", "Charlie"],
      date: "2023-10-15",
    },
    {
      id: 2,
      start: "2023-10-16T13:30:00",
      end: "2023-10-16T15:30:00",
      status: "progress",
      description: "Rapat Tim Proyek",
      title: "Meeting 2",
      participants: ["David", "Eva"],
      date: "2023-10-16",
    },
    {
      id: 3,
      start: "2023-10-18T09:00:00",
      end: "2023-10-18T11:00:00",
      status: "done",
      description: "Training Karyawan Baru",
      title: "Training 1",
      participants: ["Grace", "Helen"],
      date: "2023-10-18",
    },
    {
      id: 4,
      start: "2023-10-19T14:00:00",
      end: "2023-10-19T16:00:00",
      status: "to do",
      description: "Pertemuan Penjualan",
      title: "Meeting 3",
      participants: ["Ivy", "Jack"],
      date: "2023-10-19",
    },
    {
      id: 5,
      start: "2023-10-20T10:30:00",
      end: "2023-10-20T12:30:00",
      status: "progress",
      description: "Sesi Evaluasi Proyek",
      title: "Evaluation Session",
      participants: ["Katie", "Liam"],
      date: "2023-10-20",
    },
  ];

  const columns: ColumnDef<Agenda>[] = [
    {
      accessorKey: "title",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Judul Kegiatan" />;
      },
    },
    {
      accessorKey: "description",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Deskripsi Kegiatan" />
        );
      },
    },
    // {
    //   accessorKey: "participants",
    //   header: ({ column }) => {
    //     return <DataTableColumnHeader column={column} title="participants" />;
    //   },
    //   cell({row}) {
    //     const data = row.original;
    //     return (
    //       <div className="flex flex-col gap-2">
    //         {data.participants.map((participant) => (
    //           <span key={participant} className="capitalize">{participant}</span>
    //         ))}
    //       </div>
    //     );
    //   },
    // },
    {
      accessorKey: "start",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Tanggal Mulai" />;
      },
      cell({ row }) {
        const data = row.original;
        return (
          <div className="flex flex-col gap-2">
            <span className="capitalize">
              {!!data &&
                new Date(data.start).toLocaleString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  // timeZoneName: "short",
                  // timeZone: "Asia/Makassar",
                })}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "end",
      header: ({ column }) => {
        return (
          <DataTableColumnHeader column={column} title="Tanggal Selesai" />
        );
      },
      cell({ row }) {
        const data = row.original;
        return (
          <div className="flex flex-col gap-2">
            <span className="capitalize">
              {!!data &&
                new Date(data.end).toLocaleString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  // timeZoneName: "short",
                  // timeZone: "Asia/Makassar",
                })}
            </span>
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
          case "to do":
            badgeComponent = (
              <Badge className="capitalize" variant={"destructive"}>
                {data.status}
              </Badge>
            );
            break;
          case "progress":
            badgeComponent = (
              <Badge className="capitalize" variant={"secondary"}>
                {data.status}
              </Badge>
            );
            break;
          case "done":
            badgeComponent = (
              <Badge className="capitalize" variant={"success"}>
                {data.status}
              </Badge>
            );
            break;
          default:
            badgeComponent = (
              <Badge className="capitalize" variant={"success"}>
                {data.status}
              </Badge>
            );
            break;
        }
        return (
          <div className="flex items-center justify-center">
            {badgeComponent}
          </div>
        );
      },
    },
  ];
  const [data, setData] = useState(agenda);
  return (
    <DataTable
      columns={columns}
      data={data}
      form={props.form ? <FormAgenda /> : <></>}
      title="Tabel Daftar Agenda Kegiatan"
    />
  );
};

export default TableAgenda;
