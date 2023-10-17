"use client";
import React from "react";
import { DataTable } from "@/components/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/table/DataTableHeader";
import { ArrowDownIcon, ArrowUpIcon, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Badge } from "../../components/ui/badge";
import { cn } from "../../lib/utils";

type Props = {};

const TableTransaction = (props: Props) => {
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
      accessorKey: "company",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Company" />;
      },
    },
    {
      accessorKey: "date",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Date" />;
      },
    },
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Amount" />;
      },
      cell({ row }) {
        const data = row.original;
        return (
          <div
            className={cn(
              "font-semibold flex items-center gap-2 justify-end",
              data.amount >= 0 ? "text-green-500" : "text-destructive"
            )}
          >
            {data.amount.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
            {data.amount >= 0 ? (
              <ArrowUpIcon size={15} />
            ) : (
              <ArrowDownIcon size={15} />
            )}
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
          case "failed":
            badgeComponent = (
              <Badge variant={"destructive"}>{data.status}</Badge>
            );
            break;
          case "pending":
            badgeComponent = <Badge variant={"secondary"}>{data.status}</Badge>;
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
  const transactions = [
    {
      id: 1,
      company: "Netflix",
      date: "27 March 2020, at 12:30 PM",
      amount: -2500,
      status: "complete",
    },
    {
      id: 2,
      company: "Apple",
      date: "27 March 2020, at 04:30 AM",
      amount: 2000,
      status: "complete",
    },
    {
      id: 3,
      company: "Stripe",
      date: "26 March 2020, at 13:45 PM",
      amount: 750,
      status: "complete",
    },
    {
      id: 4,
      company: "HubSpot",
      date: "26 March 2020, at 12:30 PM",
      amount: 1000,
      status: "complete",
    },
    {
      id: 5,
      company: "Creative Tim",
      date: "26 March 2020, at 08:30 AM",
      amount: 2500,
      status: "complete",
    },
    {
      id: 6,
      company: "Webflow",
      date: "26 March 2020, at 05:00 AM",
      amount: 4000,
      status: "pending",
    },
  ];

  return <DataTable columns={columns} data={transactions} 
  // title="Transactions History" 
  />;
};

export default TableTransaction;
