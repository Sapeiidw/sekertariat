"use client"
import React from "react";
import TableTransaction from "./TableTransaction";
import DashboardCard from "../../components/card/DashboardCard";
import {
  ArrowDownIcon,
  ArrowLeftRightIcon,
  ArrowUpIcon,
  CreditCardIcon,
  DollarSignIcon,
  PercentCircleIcon,
  PlusCircleIcon,
} from "lucide-react";
import LineChart from "../../components/chart/LineChart";
import { Button } from "../../components/ui/button";
import TableAccount from "./TableAccount";
import { Separator } from "../../components/ui/separator";
import { FormTopUp } from "./FormTopUp";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";
import TablePemasukan from "./TablePemasukan";
import TablePengeluaran from "./TablePengeluaran";
import FormPemasukan from "./FormPemasukan";
import TableAnggaran from "./TableAnggaran";
import TableStatusKeuangan from "./TableStatusKeuangan";

type Props = {};
function Page({}: Props) {
  return (
    <div className="w-full flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        <Tabs defaultValue="pemasukan" className="space-y-4">
          <TabsList className="px-0">
            <TabsTrigger className="p-3 px-6 rounded-lg" value="pemasukan">
              Pemasukan
            </TabsTrigger>
            <TabsTrigger className="p-3 px-6 rounded-lg" value="pengeluaran">
              Pengeluaran
            </TabsTrigger>
            <TabsTrigger
              className="p-3 px-6 rounded-lg"
              value="rencana-anggaran"
            >
              Rencana Anggaran
            </TabsTrigger>
            <TabsTrigger
              className="p-3 px-6 rounded-lg"
              value="status-keuangan"
            >
              Status Keuangan
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pemasukan">
            <TablePemasukan />
          </TabsContent>
          <TabsContent value="pengeluaran">
            <TablePengeluaran />
          </TabsContent>
          <TabsContent value="rencana-anggaran">
            <TableAnggaran />
          </TabsContent>
          <TabsContent value="status-keuangan">
            <TableStatusKeuangan />
          </TabsContent>
        </Tabs>
        {/* <div className="grid grid-cols-4 gap-4 items-center">
          <FormTopUp />
          <Button variant={"outline"} size={"lg"}>
            <ArrowLeftRightIcon className="mr-2 h-6 w-6" />
            Transfer
          </Button>
          <Button variant={"outline"} size={"lg"}>
            <PercentCircleIcon className="mr-2 h-6 w-6" />
            Taxes
          </Button>
          <Button variant={"outline"} size={"lg"}>
            <CreditCardIcon className="mr-2 h-6 w-6" />
            Account
          </Button>
        </div> */}
        {/* <Separator />
        <section className="flex flex-col gap-2">
          <span className="text-muted-foreground text-sm font-semibold">
            Accounts
          </span>
          <TableAccount />
        </section> */}
      </section>
      {/* <section className="flex flex-col gap-2">
        <span className="text-muted-foreground text-sm font-semibold">
          Transaction Report
        </span>
        <div className="flex gap-6">
          <div className="flex flex-col justify-between items-stretch w-1/4">
            <DashboardCard
              amount={50000}
              percentage={5}
              icon={<DollarSignIcon />}
              title="Current Balance"
            />
            <DashboardCard
              amount={50000}
              percentage={5}
              icon={<ArrowDownIcon />}
              title="Balance In"
            />
            <DashboardCard
              amount={50000}
              percentage={5}
              icon={<ArrowUpIcon />}
              title="Balance Out"
            />
          </div>
          <LineChart className="w-3/4 h-[300px]" />
        </div>
      </section>
      <div className="flex flex-col gap-2">
        <span className="text-muted-foreground text-sm font-semibold">
          Transaction History
        </span>
        <TableTransaction />
      </div> */}
    </div>
  );
}

export default Page;
