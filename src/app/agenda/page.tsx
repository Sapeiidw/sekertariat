import React from "react";
import TableAgenda from "./TableAgenda";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <TableAgenda />
      </section>
    </div>
  );
};

export default Page;
