"use client"
import React from "react";
import { DataTable } from "../../components/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../components/table/DataTableHeader";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Badge } from "../../components/ui/badge";

type Props = {};

const columns: ColumnDef<any>[] = [
  {
    accessorKey: "account",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Account" />;
    },
    cell({ row }) {
        const data = row.original;
        return (
            <div className="flex flex-col">
                <span className="font-semibold">{data.account}</span>
                <span className="text-sm text-muted-foreground">{data.account_name}</span>
            </div>
        )
    },
  },
  {
    accessorKey: "balance",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Balance" />;
    },
    cell({ row }) {
      const data = row.original;
      return (
        <div
          className={cn(
            "font-semibold flex items-center gap-2 justify-end",
            data.balance >= 0 ? "text-green-500" : "text-destructive"
          )}
        >
          {data.balance.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
          {data.balance >= 0 ? (
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
        case "inactive":
          badgeComponent = <Badge variant={"destructive"}>{data.status}</Badge>;
          break;
        default:
          badgeComponent = <Badge>{data.status}</Badge>;
          break;
      }
      return <div className="">{badgeComponent}</div>;
    },
  },
];

const accounts = [
  {
    id: 1,
    account: "1234-5678-9012-3456",
    account_name: "Cash In",
    balance: 5000,
    status: "active",
  },
  {
    id: 2,
    account: "9876-5432-1098-7654",
    account_name: "Cash Out",
    balance: 10000,
    status: "active",
  },
  {
    id: 3,
    account: "4567-1234-6789-0123",
    account_name: "AR",
    balance: 2500,
    status: "inactive",
  },
  {
    id: 4,
    account: "7890-4321-5678-9012",
    account_name: "AP",
    balance: 7500,
    status: "active",
  },
  {
    id: 5,
    account: "2345-6789-0123-4567",
    account_name: "Main Account",
    balance: 3000,
    status: "active",
  },
//   {
//     id: 6,
//     account: "3456-7890-1234-5678",
//     account_name: "Sophia Martin",
//     balance: 6000,
//     status: "inactive",
//   },
//   {
//     id: 7,
//     account: "4567-8901-2345-6789",
//     account_name: "David White",
//     balance: 9000,
//     status: "active",
//   },
//   {
//     id: 8,
//     account: "5678-9012-3456-7890",
//     account_name: "Olivia Anderson",
//     balance: 2000,
//     status: "active",
//   },
//   {
//     id: 9,
//     account: "6789-0123-4567-8901",
//     account_name: "James Brown",
//     balance: 7000,
//     status: "inactive",
//   },
//   {
//     id: 10,
//     account: "7890-1234-5678-9012",
//     account_name: "Lily Harris",
//     balance: 5500,
//     status: "active",
//   },
//   {
//     id: 11,
//     account: "8901-2345-6789-0123",
//     account_name: "William Miller",
//     balance: 1500,
//     status: "active",
//   },
//   {
//     id: 12,
//     account: "9012-3456-7890-1234",
//     account_name: "Ava Young",
//     balance: 3500,
//     status: "inactive",
//   },
//   {
//     id: 13,
//     account: "3456-7890-1234-5678",
//     account_name: "Henry Clark",
//     balance: 20000,
//     status: "active",
//   },
//   {
//     id: 14,
//     account: "1234-5678-9012-3456",
//     account_name: "Emma Lewis",
//     balance: 4200,
//     status: "active",
//   },
//   {
//     id: 15,
//     account: "5678-9012-3456-7890",
//     account_name: "Daniel Walker",
//     balance: 8900,
//     status: "inactive",
//   },
];

const TableAccount = (props: Props) => {
  return <DataTable columns={columns} data={accounts} />;
};

export default TableAccount;
