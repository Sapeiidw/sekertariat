"use client"
import React from "react";
import TableAgenda from "./TableAgenda";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <TableAgenda form />
      </section>
    </div>
  );
};

export default Page;
