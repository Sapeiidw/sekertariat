import React from "react";
import TablePegawai from "./TablePegawai";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <span className="text-muted-foreground text-sm font-semibold">
          List Pegawai
        </span>
        <TablePegawai />
      </section>
    </div>
  );
};

export default Page;
