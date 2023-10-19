"use client";
import Image from "next/image";
import LineChart from "@/components/chart/LineChart";
import BarChart from "@/components/chart/BarChart";

import { Button } from "../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/input";
import SideBar from "../components/nav/Sidebar";
import { DataTable } from "../components/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowBigDown, ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon, DollarSignIcon, Globe2Icon, MoreHorizontal, UsersIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";
import { DataTableColumnHeader } from "../components/table/DataTableHeader";
import { useToast } from "../components/ui/use-toast";
import { Checkbox } from "../components/ui/checkbox";
import { CardExample } from "../components/card/CardExample";
import DashboardCard from "../components/card/DashboardCard";
import TableAgenda from "./agenda/TableAgenda";

export default function Home() {
  const { toast } = useToast();
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(value, null, 2)}</code>
        </pre>
      ),
    });
  };
  const columns: ColumnDef<any>[] = [
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={table.getIsAllPageRowsSelected()}
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       id={row.getValue("id")}
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Status" />;
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Email" />;
      },
    },
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Amount" />;
      },
    },
    {
      // id: "actions",
      header: "Action",
      cell: ({ row }) => {
        const payment = row.original;

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
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const data: any[] = [
    {
      id: "528a0b7c",
      amount: 84,
      status: "pending",
      email: "x@example.com",
    },
    {
      id: "d7b3f8e2",
      amount: 57,
      status: "completed",
      email: "y@example.com",
    },
    {
      id: "6e94a1d9",
      amount: 32,
      status: "pending",
      email: "z@example.com",
    },
    {
      id: "3c287b1f",
      amount: 92,
      status: "completed",
      email: "a@example.com",
    },
    {
      id: "8fcd6e2a",
      amount: 71,
      status: "pending",
      email: "b@example.com",
    },
    {
      id: "14e99fd6",
      amount: 15,
      status: "completed",
      email: "c@example.com",
    },
    {
      id: "b2a4d7f1",
      amount: 63,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "c5b1e0fd",
      amount: 48,
      status: "completed",
      email: "e@example.com",
    },
    {
      id: "7d6b2f9c",
      amount: 75,
      status: "pending",
      email: "f@example.com",
    },
    {
      id: "9a1e6c5b",
      amount: 29,
      status: "completed",
      email: "g@example.com",
    },
    {
      id: "0c4b8a7d",
      amount: 61,
      status: "pending",
      email: "h@example.com",
    },
    {
      id: "f2d1c7e9",
      amount: 44,
      status: "completed",
      email: "i@example.com",
    },
    {
      id: "8f9c3b4e",
      amount: 38,
      status: "pending",
      email: "j@example.com",
    },
    {
      id: "1e2a4b6c",
      amount: 79,
      status: "completed",
      email: "k@example.com",
    },
    {
      id: "d5c0b8a7",
      amount: 53,
      status: "pending",
      email: "l@example.com",
    },
    {
      id: "3f1c9b7e",
      amount: 27,
      status: "completed",
      email: "m@example.com",
    },
    {
      id: "a6e0c8b4",
      amount: 66,
      status: "pending",
      email: "n@example.com",
    },
    {
      id: "7b4e8c9a",
      amount: 41,
      status: "completed",
      email: "o@example.com",
    },
    {
      id: "0c9d1b5e",
      amount: 88,
      status: "pending",
      email: "p@example.com",
    },
    {
      id: "4e8c7b0d",
      amount: 22,
      status: "completed",
      email: "q@example.com",
    },
  ];

  const dashboardData = [
    {
      title: "Pemasukan",
      amount: 53000,
      percentage: 5,
      icon: <ArrowDownIcon size={32} />,
    },
    {
      title: "Pengeluaran",
      amount: 2300,
      percentage: 3,
      icon: <ArrowUpIcon size={32} />,
    },
    {
      title: "Saldo",
      amount: 1234,
      percentage: -5,
      icon: <DollarSignIcon size={32} />,
    },
    {
      title: "Pegawai",
      amount: 345213,
      percentage: 15,
      icon: <UsersIcon size={32} />,
      type: 'number'
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col gap-6">
      <div className="grid grid-cols-4 gap-4 w-full overflow-auto">
        {dashboardData.map((item: any) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            amount={item.amount}
            percentage={item.percentage}
            icon={item.icon}
            type={item.type}
          />
        ))}
      </div>
      <LineChart className="h-[400px]"></LineChart>
      <BarChart></BarChart>
      <TableAgenda></TableAgenda>
    </section>
  );
}
