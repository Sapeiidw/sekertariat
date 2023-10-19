import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "../../lib/utils";

type Props = {
  title: string;
  amount: number;
  percentage: number;
  icon: React.ReactNode;
  type?: 'currency' | 'percentage' | 'number';
};

const DashboardCard = ({ title, amount, percentage, icon, type = 'currency' }: Props) => {
  return (
    <div className="flex items-center justify-between p-2 gap-2 rounded-lg bg-white  shadow-soft-2xl">
      <div className="flex flex-col pl-2">
        <span className="text-sm text-muted-foreground">{title}</span>
        <div className="flex items-end gap-2">
          <span className="text-xl font-bold text-foreground">
            {type == 'currency' && amount.toLocaleString("id-ID", {
              currency: "IDR",
              style: "currency",
            })}
            {type == 'number' && amount.toLocaleString("id-ID")}
          </span>
          <span
            className={cn(
              "text-sm font-semibold",
              percentage >= 0 ? "text-green-500" : "text-destructive"
            )}
          >
            {percentage}%
          </span>
        </div>
      </div>

      <span className="flex justify-center items-center w-16 h-16 rounded-xl bg-gradient-to-tl from-primary to-secondary text-white">
        {icon}
      </span>
    </div>
    // <Card className="flex items-center justify-between rounded-xl">
    //   <CardHeader className="pr-2">
    //     <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
    //     <CardDescription>
    //       <span className="text-xl font-bold text-foreground">
    //         {amount.toLocaleString("id-ID", {
    //           currency: "IDR",
    //           style: "currency",
    //         })}
    //       </span>
    //       <span
    //         className={cn(
    //           "ml-2 text-sm font-semibold",
    //           percentage >= 0 ? "text-green-500" : "text-destructive"
    //         )}
    //       >
    //         {percentage}%
    //       </span>
    //     </CardDescription>
    //   </CardHeader>
    //   <div className="flex justify-center items-center p-4">
    //     <span className="flex justify-center items-center w-16 h-16 rounded-lg bg-gradient-to-tl from-primary to-secondary text-white">
    //       {icon}
    //     </span>
    //   </div>
    // </Card>
  );
};

export default DashboardCard;
