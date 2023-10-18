"use client"
import React from "react";
import TablePegawai from "./TablePegawai";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <TablePegawai />
      </section>
    </div>
  );
};

export default Page;
